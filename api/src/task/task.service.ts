import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
    CreateOneTaskArgs,
    DeleteOneTaskArgs,
    FindManyTaskArgs,
    FindUniqueTaskArgs,
    Task,
    UpdateOneTaskArgs,
} from '../@generated';
import { GraphQLException } from '@nestjs/graphql/dist/exceptions';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Create one task
     * @param createOneTaskArgs
     */
    public async create(createOneTaskArgs: CreateOneTaskArgs): Promise<Task> {
        return this.prismaService.task.create({
            include: {
                note: true,
                user: true,
            },
            ...createOneTaskArgs,
        });
    }

    /**
     *
     * @param findManyTaskArgs
     */
    public async findAll(findManyTaskArgs: FindManyTaskArgs): Promise<Task[]> {
        return this.prismaService.task.findMany({
            include: {
                note: true,
                user: true,
            },
            ...findManyTaskArgs,
        });
    }

    /**
     *
     * @param findUniqueTaskArgs
     */
    public async findOne(findUniqueTaskArgs: FindUniqueTaskArgs): Promise<Task | null> {
        return this.prismaService.task.findUniqueOrThrow({
            include: {
                note: true,
                user: true,
            },
            ...findUniqueTaskArgs,
        });
    }

    /**
     *
     * @param updateOneTaskArgs
     */
    public async update(updateOneTaskArgs: UpdateOneTaskArgs): Promise<Task> {
        const existingTask = await this.prismaService.task.findUnique({
            where: updateOneTaskArgs.where,
        });

        if (!existingTask) {
            // TODO: add logger
            throw new GraphQLException('Task not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        return this.prismaService.task.update({
            include: {
                note: true,
                user: true,
            },
            ...updateOneTaskArgs,
        });
    }

    /**
     *
     * @param deleteOneTaskArgs
     */
    public async remove(deleteOneTaskArgs: DeleteOneTaskArgs): Promise<Task> {
        const existingTask = await this.prismaService.task.findUnique({
            where: deleteOneTaskArgs.where,
        });

        if (!existingTask) {
            // TODO: add logger
            throw new GraphQLException('Task not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        return this.prismaService.task.delete({
            include: {
                note: true,
                user: true,
            },
            ...deleteOneTaskArgs,
        });
    }

    /**
     * Complete task
     * @param userId
     * @param taskId
     */
    public async completedMyTask(userId: string, taskId: string): Promise<Task> {
        const existingTask = await this.prismaService.task.findUnique({
            where: {
                id: taskId,
            },
        });

        if (!existingTask) {
            // TODO: add logger
            throw new GraphQLException('Task not found!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_FOUND,
                    },
                },
            });
        }

        // If note is archived
        if (null !== existingTask.completedAt) {
            // TODO: add logger or winston module?
            throw new GraphQLException('Task is already completed!', {
                extensions: {
                    http: {
                        status: HttpStatus.NOT_ACCEPTABLE,
                    },
                },
            });
        }

        return this.prismaService.task.update({
            include: {
                note: true,
                user: true,
            },
            where: {
                id: taskId,
                userId,
            },
            data: {
                completedAt: new Date(),
            },
        });
    }
}
