import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import {
    AggregateTask,
    CreateOneTaskArgs,
    DeleteOneTaskArgs,
    FindManyTaskArgs,
    FindUniqueTaskArgs,
    Task,
    TaskAggregateArgs,
    UpdateOneTaskArgs,
} from '../@generated';
import { GraphQLException } from '@nestjs/graphql/dist/exceptions';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Create one task
     * @param createOneTaskArgs
     * @param select
     */
    public async create(createOneTaskArgs: CreateOneTaskArgs, select: Prisma.TaskSelect): Promise<Task> {
        return this.prismaService.task.create({
            ...createOneTaskArgs,
            select,
        });
    }

    /**
     *
     * @param findManyTaskArgs
     * @param select
     * @param id
     */
    public async findAll(
        findManyTaskArgs: FindManyTaskArgs,
        select: Prisma.TaskSelect,
        id?: string | null,
    ): Promise<Task[]> {
        return this.prismaService.task.findMany({
            ...findManyTaskArgs,
            where: {
                noteId: id ? { equals: id } : undefined,
                ...findManyTaskArgs.where,
            },
            select,
        });
    }

    /**
     *
     * @param aggregateTaskArgs
     */
    // public async aggregate(aggregateTaskArgs: TaskAggregateArgs): Promise<AggregateTask> {
    //     return this.prismaService.task.aggregate({
    //         ...aggregateTaskArgs,
    //     });
    // }

    /**
     *
     * @param findUniqueTaskArgs
     * @param select
     */
    public async findOne(findUniqueTaskArgs: FindUniqueTaskArgs, select: Prisma.TaskSelect): Promise<Task | null> {
        return this.prismaService.task.findUniqueOrThrow({
            ...findUniqueTaskArgs,
            select,
        });
    }

    /**
     *
     * @param updateOneTaskArgs
     * @param select
     */
    public async update(updateOneTaskArgs: UpdateOneTaskArgs, select: Prisma.TaskSelect): Promise<Task> {
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
            ...updateOneTaskArgs,
            select,
        });
    }

    /**
     *
     * @param deleteOneTaskArgs
     * @param select
     */
    public async remove(deleteOneTaskArgs: DeleteOneTaskArgs, select: Prisma.TaskSelect): Promise<Task> {
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
            ...deleteOneTaskArgs,
            select,
        });
    }

    /**
     * Complete task
     * @param userId
     * @param taskId
     * @param select
     */
    public async completedMyTask(userId: string, taskId: string, select: Prisma.TaskSelect): Promise<Task> {
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
            where: {
                id: taskId,
                userId,
            },
            data: {
                completedAt: new Date(),
            },
            select,
        });
    }
}
