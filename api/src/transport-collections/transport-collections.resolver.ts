import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { TransportCollectionsService } from './transport-collections.service';
import { PubSub } from 'graphql-subscriptions';
import {
    CreateOneTransportCollectionArgs,
    FindManyTransportCollectionArgs,
    TransportCollection,
    User,
} from '../@generated';
import { UseGuards } from '@nestjs/common';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { Prisma, UserRole } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler';
import PrismaSelect from '../common/decorators/prisma-select.decorator';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => TransportCollection)
export class TransportCollectionsResolver {
    constructor(
        private readonly transportCollectionsService: TransportCollectionsService,
        private readonly pubSub: PubSub,
    ) {}

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => TransportCollection)
    public async createTransportCollection(
        @Args() createOneTransportCollectionArgs: CreateOneTransportCollectionArgs,
        @PrismaSelect() select: Prisma.TransportCollectionSelect,
    ): Promise<TransportCollection> {
        const createdTransportCollection = await this.transportCollectionsService.create(
            createOneTransportCollectionArgs,
            select,
        );

        await this.pubSub.publish(PublishStateEnum.TRANSPORT_COLLECTION_CREATED, {
            [PublishStateEnum.TRANSPORT_COLLECTION_CREATED]: createdTransportCollection,
        });

        return createdTransportCollection;
    }

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Query(() => [TransportCollection], { name: 'transportCollections' })
    public async findAll(
        @Args() findManyTransportCollectionArgs: FindManyTransportCollectionArgs,
        @PrismaSelect() select: Prisma.TransportCollectionSelect,
    ): Promise<TransportCollection[]> {
        return this.transportCollectionsService.findAll(findManyTransportCollectionArgs, select);
    }

    // @Query(() => TransportCollection, { name: 'transportCollection' })
    // findOne(@Args('id', { type: () => Int }) id: number) {
    //     return this.transportCollectionsService.findOne(id);
    // }
    //
    // @Mutation(() => TransportCollection)
    // updateTransportCollection(
    //     @Args('updateTransportCollectionInput') updateTransportCollectionInput: UpdateTransportCollectionInput,
    // ) {
    //     return this.transportCollectionsService.update(
    //         updateTransportCollectionInput.id,
    //         updateTransportCollectionInput,
    //     );
    // }
    //
    // @Mutation(() => TransportCollection)
    // removeTransportCollection(@Args('id', { type: () => Int }) id: number) {
    //     return this.transportCollectionsService.remove(id);
    // }

    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => User, { name: PublishStateEnum.TRANSPORT_COLLECTION_CREATED })
    public async createdUser(): Promise<AsyncIterator<User>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TRANSPORT_COLLECTION_CREATED);
    }
}
