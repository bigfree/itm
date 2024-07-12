import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateOneNoteConfigArgs, FindUniqueNoteConfigArgs, NoteConfig, UpdateOneNoteConfigArgs } from '../@generated';
import { PrismaService } from '../common/prisma/prisma.service';
import { GraphQLException } from '@nestjs/graphql/dist/exceptions';

@Injectable()
export class NoteConfigService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Create note config
     * @param createOneNoteConfigArgs
     */
    public async create(createOneNoteConfigArgs: CreateOneNoteConfigArgs): Promise<NoteConfig> {
        return this.prismaService.noteConfig.create({
            include: {
                note: true,
            },
            ...createOneNoteConfigArgs,
        });
    }

    /**
     * Find unique note
     * @param findUniqueNoteConfigArgs
     */
    public async findOne(findUniqueNoteConfigArgs: FindUniqueNoteConfigArgs): Promise<NoteConfig | null> {
        return this.prismaService.noteConfig.findUniqueOrThrow({
            include: {
                note: true,
            },
            ...findUniqueNoteConfigArgs,
        });
    }

    /**
     * Update one note config
     * @param updateOneNoteConfigArgs
     */
    public async update(updateOneNoteConfigArgs: UpdateOneNoteConfigArgs): Promise<NoteConfig> {
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
            include: {
                note: true,
            },
            ...updateOneNoteConfigArgs,
        });
    }
}
