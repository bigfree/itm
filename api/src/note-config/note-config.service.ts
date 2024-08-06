import { HttpStatus, Injectable } from '@nestjs/common';
import {
    CreateOneNoteConfigArgs,
    FindUniqueNoteConfigArgs,
    NoteConfig,
    UpdateOneNoteConfigArgs,
    UpsertOneNoteConfigArgs,
} from '../@generated';
import { PrismaService } from '../common/prisma/prisma.service';
import { GraphQLException } from '@nestjs/graphql/dist/exceptions';
import { Prisma } from '@prisma/client';

@Injectable()
export class NoteConfigService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Create note config
     * @param createOneNoteConfigArgs
     * @param select
     */
    public async create(
        createOneNoteConfigArgs: CreateOneNoteConfigArgs,
        select: Prisma.NoteConfigSelect,
    ): Promise<NoteConfig> {
        return this.prismaService.noteConfig.create({
            ...createOneNoteConfigArgs,
            select,
        });
    }

    /**
     * Find unique note
     * @param findUniqueNoteConfigArgs
     * @param select
     */
    public async findOne(
        findUniqueNoteConfigArgs: FindUniqueNoteConfigArgs,
        select: Prisma.NoteConfigSelect,
    ): Promise<NoteConfig | null> {
        return this.prismaService.noteConfig.findUniqueOrThrow({
            ...findUniqueNoteConfigArgs,
            select,
        });
    }

    /**
     * Update one note config
     * @param updateOneNoteConfigArgs
     * @param select
     */
    public async update(
        updateOneNoteConfigArgs: UpdateOneNoteConfigArgs,
        select: Prisma.NoteConfigSelect,
    ): Promise<NoteConfig> {
        const existingConfig = await this.prismaService.noteConfig.findUnique({
            where: updateOneNoteConfigArgs.where,
        });

        if (!existingConfig) {
            // TODO: add logger
            throw new GraphQLException('Note config not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        return this.prismaService.noteConfig.update({
            ...updateOneNoteConfigArgs,
            select,
        });
    }

    /**
     * Upsert one note config
     * @param upsertOneNoteConfigArgs
     * @param select
     */
    public async upsert(
        upsertOneNoteConfigArgs: UpsertOneNoteConfigArgs,
        select: Prisma.NoteConfigSelect,
    ): Promise<NoteConfig> {
        return this.prismaService.noteConfig.upsert({
            ...upsertOneNoteConfigArgs,
            select,
        });
    }
}
