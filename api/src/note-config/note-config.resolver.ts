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
    UpdateOneNoteConfigArgs,
} from '../@generated';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';

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
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => NoteConfig)
    public async createNoteConfig(@Args() createOneNoteConfigArgs: CreateOneNoteConfigArgs): Promise<NoteConfig> {
        const config: NoteConfig = await this.noteConfigService.create(createOneNoteConfigArgs);

        await this.pubSub.publish(PublishStateEnum.NOTE_CONFIG_CREATED, {
            [PublishStateEnum.NOTE_CONFIG_CREATED]: config,
        });

        return config;
    }

    /**
     * Find unique note config
     * @param findUniqueNoteConfigArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => NoteConfig, { name: 'noteConfig' })
    public async findOne(@Args() findUniqueNoteConfigArgs: FindUniqueNoteConfigArgs) {
        return this.noteConfigService.findOne(findUniqueNoteConfigArgs);
    }

    /**
     * Update one note config
     * @param updateOneNoteConfigArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => NoteConfig)
    public async updateNoteConfig(@Args() updateOneNoteConfigArgs: UpdateOneNoteConfigArgs) {
        const config: NoteConfig = await this.noteConfigService.update(updateOneNoteConfigArgs);

        await this.pubSub.publish(PublishStateEnum.NOTE_CONFIG_UPDATED, {
            [PublishStateEnum.NOTE_CONFIG_UPDATED]: config,
        });

        return config;
    }

    @Subscription(() => Note, { name: PublishStateEnum.NOTE_CONFIG_CREATED })
    public async createdNoteConfig(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CONFIG_CREATED);
    }

    @Subscription(() => Note, { name: PublishStateEnum.NOTE_CONFIG_UPDATED })
    public async updatedNoteConfig(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CONFIG_UPDATED);
    }

    // TODO: add remove for admin
}
