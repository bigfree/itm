import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { NoteConfigService } from './note-config.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PubSub } from 'graphql-subscriptions';
import {
    CreateOneNoteConfigArgs,
    FindUniqueNoteConfigArgs,
    Note,
    NoteConfig,
    UpdateOneNoteConfigArgs, UpsertOneNoteConfigArgs,
} from '../@generated';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { Prisma, UserRole } from '@prisma/client';
import PrismaSelect from '../common/decorators/prisma-select.decorator';

@UseGuards(JwtAuthGuard)
@Resolver(() => NoteConfig)
export class NoteConfigResolver {
    /**
     * Create a new instance of the Constructor.
     *
     * @param {NoteConfigService} noteConfigService - The NoteConfigService instance.
     * @param {PubSub} pubSub - The PubSub instance.
     */
    constructor(
        private readonly noteConfigService: NoteConfigService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Create note config
     * @param createOneNoteConfigArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => NoteConfig)
    public async createNoteConfig(
        @Args() createOneNoteConfigArgs: CreateOneNoteConfigArgs,
        @PrismaSelect() select: Prisma.NoteConfigSelect,
    ): Promise<NoteConfig> {
        const config: NoteConfig = await this.noteConfigService.create(createOneNoteConfigArgs, select);

        await this.pubSub.publish(PublishStateEnum.NOTE_CONFIG_CREATED, {
            [PublishStateEnum.NOTE_CONFIG_CREATED]: config,
        });

        return config;
    }

    /**
     * Find unique note config
     * @param findUniqueNoteConfigArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => NoteConfig, { name: 'noteConfig' })
    public async findOne(
        @Args() findUniqueNoteConfigArgs: FindUniqueNoteConfigArgs,
        @PrismaSelect() select: Prisma.NoteConfigSelect,
    ) {
        return this.noteConfigService.findOne(findUniqueNoteConfigArgs, select);
    }

    /**
     * Update one note config
     * @param updateOneNoteConfigArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => NoteConfig)
    public async updateNoteConfig(
        @Args() updateOneNoteConfigArgs: UpdateOneNoteConfigArgs,
        @PrismaSelect() select: Prisma.NoteConfigSelect,
    ) {
        const config: NoteConfig = await this.noteConfigService.update(updateOneNoteConfigArgs, select);

        await this.pubSub.publish(PublishStateEnum.NOTE_CONFIG_UPDATED, {
            [PublishStateEnum.NOTE_CONFIG_UPDATED]: config,
        });

        return config;
    }

    /**
     * Upsert one note config
     * @param upsertOneNoteConfigArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => NoteConfig)
    public async upsertNoteConfig(
        @Args() upsertOneNoteConfigArgs: UpsertOneNoteConfigArgs,
        @PrismaSelect() select: Prisma.NoteConfigSelect,
    ) {
        const config: NoteConfig = await this.noteConfigService.upsert(upsertOneNoteConfigArgs, select);

        await this.pubSub.publish(PublishStateEnum.NOTE_CONFIG_UPSERTED, {
            [PublishStateEnum.NOTE_CONFIG_UPSERTED]: config,
        });

        return config;
    }

    // TODO: add userId filter?
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, { name: PublishStateEnum.NOTE_CONFIG_CREATED })
    public async createdNoteConfig(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CONFIG_CREATED);
    }

    // TODO: add userId filter?
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, { name: PublishStateEnum.NOTE_CONFIG_UPDATED })
    public async updatedNoteConfig(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CONFIG_UPDATED);
    }

    // TODO: add userId filter?
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, { name: PublishStateEnum.NOTE_CONFIG_UPSERTED })
    public async upsertedNoteConfig(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CONFIG_UPSERTED);
    }

    // TODO: add remove for admin
}
