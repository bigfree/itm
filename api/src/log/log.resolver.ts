import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { LogService } from './log.service';
import { CreateOneLogArgs, FindManyLogArgs, FindUniqueLogOrThrowArgs, Log } from '../@generated';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { PubSub } from 'graphql-subscriptions';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { SkipThrottle } from '@nestjs/throttler';

@UseGuards(JwtAuthGuard)
@Resolver(() => Log)
export class LogResolver {
    constructor(
        private readonly logsService: LogService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Create log mutation
     * @param createOneLogArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Mutation(() => Log)
    async createLog(@Args() createOneLogArgs: CreateOneLogArgs) {
        const log: Log = await this.logsService.create(createOneLogArgs);

        await this.pubSub.publish(PublishStateEnum.LOG_CREATED, {
            [PublishStateEnum.LOG_CREATED]: log,
        });

        return log;
    }

    /**
     * Find all log query
     * @param findManyLogArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Query(() => [Log], { name: 'logs' })
    async findAll(@Args() findManyLogArgs: FindManyLogArgs) {
        return await this.logsService.findAll(findManyLogArgs);
    }

    /**
     * Find unique log query
     * @param findUniqueLogOrThrowArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @SkipThrottle({ short: true })
    @Query(() => Log, { name: 'log' })
    async findOne(@Args() findUniqueLogOrThrowArgs: FindUniqueLogOrThrowArgs) {
        return this.logsService.findUnique(findUniqueLogOrThrowArgs);
    }

    /**
     * Publish log created
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN]))
    @Subscription(() => Log, { name: PublishStateEnum.LOG_CREATED })
    async createdLog(): Promise<AsyncIterator<Log>> {
        return this.pubSub.asyncIterator(PublishStateEnum.LOG_CREATED);
    }
}
