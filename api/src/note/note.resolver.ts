import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { NoteService } from './note.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import {
    CreateOneNoteArgs,
    DeleteOneNoteArgs,
    FindManyNoteArgs,
    FindUniqueNoteArgs,
    Note,
    UpdateOneNoteArgs,
} from '../@generated';
import { PubSub } from 'graphql-subscriptions';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AccessTokenData } from '../common/types/authorize.types';

@UseGuards(JwtAuthGuard)
@Resolver(() => Note)
export class NoteResolver {
    /**
     * Constructor for a class.
     *
     * @param {NoteService} noteService - The note service instance.
     * @param {PubSub} pubSub - The PubSub instance.
     */
    constructor(
        private readonly noteService: NoteService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Create note mutation
     * @param createOneNoteArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async createNote(@Args() createOneNoteArgs: CreateOneNoteArgs): Promise<Note> {
        const note: Note = await this.noteService.createOne(createOneNoteArgs);

        await this.pubSub.publish(PublishStateEnum.NOTE_CREATED, {
            [PublishStateEnum.NOTE_CREATED]: note,
        });

        return note;
    }

    /**
     * Find many notes
     * @param findManyNoteArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => [Note], { name: 'notes' })
    public async findAll(@Args() findManyNoteArgs: FindManyNoteArgs): Promise<Note[]> {
        return this.noteService.findAll(findManyNoteArgs);
    }

    /**
     * Find one note
     * @param findUniqueNoteArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => Note, { name: 'note' })
    public async findOne(@Args() findUniqueNoteArgs: FindUniqueNoteArgs): Promise<Note | null> {
        return this.noteService.findOne(findUniqueNoteArgs);
    }

    /**
     * Update note
     * @param updateOneNoteArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async updateNote(@Args() updateOneNoteArgs: UpdateOneNoteArgs): Promise<Note> {
        const note: Note = await this.noteService.update(updateOneNoteArgs);

        await this.pubSub.publish(PublishStateEnum.NOTE_UPDATED, {
            [PublishStateEnum.NOTE_UPDATED]: note,
        });

        return note;
    }

    /**
     * Archived note
     * @param accessTokenData
     * @param noteId
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async archivedNote(@CurrentUser() accessTokenData: AccessTokenData, @Args('id') noteId: string) {
        const note: Note = await this.noteService.archive(noteId, accessTokenData.id);

        await this.pubSub.publish(PublishStateEnum.NOTE_UPDATED, {
            [PublishStateEnum.NOTE_UPDATED]: note,
        });

        return note;
    }

    /**
     * Pinned note
     * @param accessTokenData
     * @param noteId
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async pinnedNote(@CurrentUser() accessTokenData: AccessTokenData, @Args('id') noteId: string) {
        const note: Note = await this.noteService.pinned(noteId, accessTokenData.id);

        await this.pubSub.publish(PublishStateEnum.NOTE_UPDATED, {
            [PublishStateEnum.NOTE_UPDATED]: note,
        });

        return note;
    }

    /**
     * Remove note
     * @param deleteOneNoteArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_ADMIN]))
    @Mutation(() => Note)
    public async removeNote(@Args() deleteOneNoteArgs: DeleteOneNoteArgs): Promise<Note> {
        const note: Note = await this.noteService.remove(deleteOneNoteArgs);

        await this.pubSub.publish(PublishStateEnum.NOTE_DELETED, {
            [PublishStateEnum.NOTE_DELETED]: note,
        });

        return note;
    }

    /**
     * Publish created note
     */
    // TODO: add roles guard for subscription
    // @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, { name: PublishStateEnum.NOTE_CREATED })
    public async createdNote(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CREATED);
    }

    /**
     * Publish updated note
     */
    // TODO: add roles guard for subscription
    // @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, { name: PublishStateEnum.NOTE_UPDATED })
    public async updatedNote(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_UPDATED);
    }

    /**
     * Publish deleted note
     */
    // TODO: add roles guard for subscription
    // @UseGuards(new RolesGuard([UserRole.ROLE_ADMIN]))
    @Subscription(() => Note, { name: PublishStateEnum.NOTE_DELETED })
    public async deletedNote(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_DELETED);
    }
}
