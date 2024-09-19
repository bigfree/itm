import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { TransportsService } from './transports.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PubSub } from 'graphql-subscriptions';
import { CreateOneTransportArgs, FindManyTransportArgs, FindUniqueTransportArgs, Transport, User } from '../@generated';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { Prisma, UserRole } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler';
import PrismaSelect from '../common/decorators/prisma-select.decorator';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';

@UseGuards(JwtAuthGuard)
@Resolver(() => Transport)
export class TransportsResolver {
    /**
     * Constructs an instance of the class.
     *
     * @param {TransportsService} transportsService - A service for handling transport-related operations.
     * @param {PubSub} pubSub - An instance for handling publish/subscribe messaging.
     */
    constructor(
        private readonly transportsService: TransportsService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Create transport
     * @param createOneTransportArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Transport)
    public async createTransport(
        @Args() createOneTransportArgs: CreateOneTransportArgs,
        @PrismaSelect() select: Prisma.TransportSelect,
    ): Promise<Transport> {
        const createdTransport = await this.transportsService.create(createOneTransportArgs, select);

        await this.pubSub.publish(PublishStateEnum.TRANSPORT_CREATED, {
            [PublishStateEnum.TRANSPORT_CREATED]: createdTransport,
        });

        return createdTransport;
    }

    /**
     * Find all transports
     * @param findManyTransportArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => [Transport], { name: 'transports' })
    public async findAll(
        @Args() findManyTransportArgs: FindManyTransportArgs,
        @PrismaSelect() select: Prisma.TransportSelect,
    ): Promise<Transport[]> {
        return this.transportsService.findAll(findManyTransportArgs, select);
    }

    /**
     * Find unique transport
     * @param findUniqueTransportArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => Transport, { name: 'transport' })
    public async findOne(
        @Args() findUniqueTransportArgs: FindUniqueTransportArgs,
        @PrismaSelect() select: Prisma.TransportSelect,
    ): Promise<Transport | null> {
        return this.transportsService.findOne(findUniqueTransportArgs, select);
    }

    // @Mutation(() => Transport)
    // updateTransport(@Args('updateTransportInput') updateTransportInput: UpdateTransportInput) {
    //     return this.transportsService.update(updateTransportInput.id, updateTransportInput);
    // }
    //
    // @Mutation(() => Transport)
    // removeTransport(@Args('id', { type: () => Int }) id: number) {
    //     return this.transportsService.remove(id);
    // }

    /**
     * Create transport subscription
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => User, { name: PublishStateEnum.TRANSPORT_CREATED })
    public async createdUser(): Promise<AsyncIterator<User>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TRANSPORT_CREATED);
    }
}
