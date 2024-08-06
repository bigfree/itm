import { HttpStatus, Injectable } from '@nestjs/common';
import {
    CreateOneNoteArgs,
    DeleteOneNoteArgs,
    FindManyNoteArgs,
    FindUniqueNoteArgs,
    Note,
    UpdateOneNoteArgs,
} from '../@generated';
import { PrismaService } from '../common/prisma/prisma.service';
import { GraphQLException } from '@nestjs/graphql/dist/exceptions';
import { Prisma } from '@prisma/client';

@Injectable()
export class NoteService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Create one note
     * @param createOneNoteArgs
     * @param select
     */
    public async createOne(createOneNoteArgs: CreateOneNoteArgs, select: Prisma.NoteSelect): Promise<Note> {
        return this.prismaService.note.create({
            ...createOneNoteArgs,
            select,
        });
    }

    /**
     * Find many notes
     * @param findManyNoteArgs
     * @param select
     */
    public async findAll(findManyNoteArgs: FindManyNoteArgs, select: Prisma.NoteSelect): Promise<Note[]> {
        return this.prismaService.note.findMany({
            ...findManyNoteArgs,
            select,
        });
    }

    /**
     * Find unique note
     * @param findUniqueNoteArgs
     * @param select
     */
    public async findOne(findUniqueNoteArgs: FindUniqueNoteArgs, select: Prisma.NoteSelect): Promise<Note | null> {
        return this.prismaService.note.findUniqueOrThrow({
            ...findUniqueNoteArgs,
            select,
        });
    }

    /**
     * Update one note
     * @param updateOneNoteArgs
     * @param select
     */
    public async update(updateOneNoteArgs: UpdateOneNoteArgs, select: Prisma.NoteSelect): Promise<Note> {
        const existingNote = await this.prismaService.note.findUnique({
            select: {
                id: true,
            },
            where: updateOneNoteArgs.where,
        });

        if (!existingNote) {
            // TODO: add logger
            throw new GraphQLException('Note not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        return this.prismaService.note.update({
            ...updateOneNoteArgs,
            select,
        });
    }

    /**
     * Delete note
     * @param deleteOneNoteArgs
     */
    public async remove(deleteOneNoteArgs: DeleteOneNoteArgs): Promise<Note> {
        const existingNote = await this.prismaService.note.findUnique({
            where: deleteOneNoteArgs.where,
        });

        if (!existingNote) {
            // TODO: add logger
            throw new GraphQLException('Note not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        return this.prismaService.note.delete({
            include: {
                config: true,
                tasks: true,
                _count: true,
            },
            ...deleteOneNoteArgs,
        });
    }

    /**
     * Archive note
     * @param noteId
     * @param userId
     */
    public async archive(noteId: string, userId: string): Promise<Note> {
        const existingNote = await this.prismaService.note.findUnique({
            where: {
                id: noteId,
                userId: userId,
            },
        });

        if (!existingNote) {
            // TODO: add logger
            throw new GraphQLException('Note not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        // If note is archived
        if (null !== existingNote.archiveAt) {
            // TODO: add logger or winston module?
            throw new GraphQLException('Note is archived!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_ACCEPTABLE,
                    },
                },
            });
        }

        return this.prismaService.note.update({
            include: {
                config: true,
                tasks: true,
                _count: true,
            },
            where: {
                id: noteId,
                userId: userId,
            },
            data: {
                archiveAt: new Date(),
            },
        });
    }

    /**
     * Pinned note
     * @param noteId
     * @param userId
     */
    public async pinned(noteId: string, userId: string): Promise<Note> {
        const existingNote = await this.prismaService.note.findUnique({
            where: {
                id: noteId,
                userId: userId,
            },
        });

        if (!existingNote) {
            // TODO: add logger
            throw new GraphQLException('Note not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        // If note is pinned
        if (null !== existingNote.pinnedAt) {
            // TODO: add logger or winston module?
            throw new GraphQLException('Note is pinned!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_ACCEPTABLE,
                    },
                },
            });
        }

        return this.prismaService.note.update({
            include: {
                config: true,
                tasks: true,
                _count: true,
            },
            where: {
                id: noteId,
                userId: userId,
            },
            data: {
                pinnedAt: new Date(),
            },
        });
    }
}
