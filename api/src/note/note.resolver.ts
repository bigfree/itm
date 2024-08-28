import { Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { NoteService } from './note.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import {
    CreateOneNoteArgs,
    DeleteOneNoteArgs,
    FindManyNoteArgs,
    FindManyTaskArgs,
    FindUniqueNoteArgs,
    Note,
    Task,
    UpdateOneNoteArgs,
} from '../@generated';
import { PubSub } from 'graphql-subscriptions';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { RolesGuard } from '../common/guards/role.guard';
import { Prisma, UserRole } from '@prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AccessTokenData } from '../common/types/authorize.types';
import PrismaSelect from '../common/decorators/prisma-select.decorator';
import { TaskService } from '../task/task.service';

@UseGuards(JwtAuthGuard)
@Resolver(() => Note)
export class NoteResolver {
    /**
     * Constructor for a class.
     *
     * @param {NoteService} noteService - The note service instance.
     * @param taskService
     * @param {PubSub} pubSub - The PubSub instance.
     */
    constructor(
        private readonly noteService: NoteService,
        private readonly taskService: TaskService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Create note mutation
     * @param createOneNoteArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async createNote(
        @Args() createOneNoteArgs: CreateOneNoteArgs,
        @PrismaSelect() select: Prisma.NoteSelect,
    ): Promise<Note> {
        const note: Note = await this.noteService.createOne(createOneNoteArgs, select);

        await this.pubSub.publish(PublishStateEnum.NOTE_CREATED, {
            [PublishStateEnum.NOTE_CREATED]: note,
        });

        return note;
    }

    /**
     * Find many notes
     * @param findManyNoteArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => [Note], { name: 'notes' })
    public async findAll(
        @Args() findManyNoteArgs: FindManyNoteArgs,
        @PrismaSelect() select: Prisma.NoteSelect,
    ): Promise<Note[]> {
        return this.noteService.findAll(findManyNoteArgs, select);
    }

    /**
     * Find one note
     * @param findUniqueNoteArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => Note, { name: 'note' })
    public async findOne(
        @Args() findUniqueNoteArgs: FindUniqueNoteArgs,
        @PrismaSelect() select: Prisma.NoteSelect,
    ): Promise<Note | null> {
        return this.noteService.findOne(findUniqueNoteArgs, select);
    }

    /**
     * Update note
     * @param updateOneNoteArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async updateNote(
        @Args() updateOneNoteArgs: UpdateOneNoteArgs,
        @PrismaSelect() select: Prisma.NoteSelect,
    ): Promise<Note> {
        const note: Note = await this.noteService.update(updateOneNoteArgs, select);

        await this.pubSub.publish(PublishStateEnum.NOTE_UPDATED, {
            [PublishStateEnum.NOTE_UPDATED]: note,
        });

        return note;
    }

    /**
     * Archived note
     * @param accessTokenData
     * @param noteId
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Note)
    public async archivedNote(
        @CurrentUser() accessTokenData: AccessTokenData,
        @Args('id') noteId: string,
        @PrismaSelect() select: Prisma.NoteSelect,
    ) {
        const note: Note = await this.noteService.archive(noteId, accessTokenData.id, select);

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
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, {
        name: PublishStateEnum.NOTE_CREATED,
        filter: (payload, _args, context) => {
            // TODO: maybe add argument userId and condition user id === context.extra.user.id
            return payload[PublishStateEnum.NOTE_CREATED].userId === context.extra.user.id;
        },
    })
    public async createdNote(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_CREATED);
    }

    /**
     * Publish updated note
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, {
        name: PublishStateEnum.NOTE_UPDATED,
        filter: (payload, _args, context) => {
            // TODO: maybe add argument userId and condition user id === context.extra.user.id
            return payload[PublishStateEnum.NOTE_UPDATED].userId === context.extra.user.id;
        },
    })
    public async updatedNote(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_UPDATED);
    }

    /**
     * Publish deleted note
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Note, {
        name: PublishStateEnum.NOTE_DELETED,
        filter: (payload, _args, context) => {
            // TODO: maybe add argument userId and condition user id === context.extra.user.id
            return payload[PublishStateEnum.NOTE_DELETED].userId === context.extra.user.id;
        },
    })
    public async deletedNote(): Promise<AsyncIterator<Note>> {
        return this.pubSub.asyncIterator(PublishStateEnum.NOTE_DELETED);
    }

    // TODO: add logic in other properties
    @ResolveField()
    async tasks(
        @Parent() note: Note,
        @Args() tasksFilter: FindManyTaskArgs,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task[]> {
        return this.taskService.findAll(tasksFilter, select, note.id);
    }
}
