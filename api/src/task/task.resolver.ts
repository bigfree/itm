import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { TaskService } from './task.service';
import {
    AggregateTask,
    CreateOneTaskArgs,
    DeleteOneTaskArgs,
    FindManyTaskArgs,
    FindUniqueTaskArgs,
    Task,
    TaskAggregateArgs, TaskAvgAggregate,
    UpdateOneTaskArgs,
} from '../@generated';
import { UseGuards } from '@nestjs/common';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { Prisma, UserRole } from '@prisma/client';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { PubSub } from 'graphql-subscriptions';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AccessTokenData } from '../common/types/authorize.types';
import PrismaSelect from '../common/decorators/prisma-select.decorator';
import { SkipThrottle } from '@nestjs/throttler';

@UseGuards(JwtAuthGuard)
@Resolver(() => Task)
export class TaskResolver {
    /**
     * Constructor
     * @param taskService
     * @param pubSub
     */
    constructor(
        private readonly taskService: TaskService,
        private readonly pubSub: PubSub,
    ) {}

    /**
     * Create task
     * @param createOneTaskArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => Task)
    public async createTask(
        @Args() createOneTaskArgs: CreateOneTaskArgs,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task> {
        const task: Task = await this.taskService.create(createOneTaskArgs, select);

        await this.pubSub.publish(PublishStateEnum.TASK_CREATED, {
            [PublishStateEnum.TASK_CREATED]: task,
        });

        return task;
    }

    /**
     * Get all tasks
     * @param findManyTaskArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => [Task], { name: 'tasks' })
    public async findAll(
        @Args() findManyTaskArgs: FindManyTaskArgs,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task[]> {
        return this.taskService.findAll(findManyTaskArgs, select);
    }

    /**
     * Get unique task
     * @param findUniqueTaskArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => Task, { name: 'task' })
    public async findOne(
        @Args() findUniqueTaskArgs: FindUniqueTaskArgs,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task | null> {
        return this.taskService.findOne(findUniqueTaskArgs, select);
    }

    /**
     * Get all tasks
     * @param aggregateTaskArgs
     */
    // @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    // @Query(() => AggregateTask, { name: 'tasksAggregate' })
    // public async aggregate(@Args() aggregateTaskArgs: TaskAggregateArgs): Promise<AggregateTask> {
    //     return this.taskService.aggregate(aggregateTaskArgs);
    // }

    /**
     * Update task
     * @param updateOneTaskArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => Task)
    public async updateTask(
        @Args() updateOneTaskArgs: UpdateOneTaskArgs,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task> {
        const task: Task = await this.taskService.update(updateOneTaskArgs, select);

        await this.pubSub.publish(PublishStateEnum.TASK_UPDATED, {
            [PublishStateEnum.TASK_UPDATED]: task,
        });

        return task;
    }

    /**
     * Delete task
     * @param deleteOneTaskArgs
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @SkipThrottle({ short: true })
    @Mutation(() => Task)
    public async removeTask(
        @Args() deleteOneTaskArgs: DeleteOneTaskArgs,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task> {
        const task: Task = await this.taskService.remove(deleteOneTaskArgs, select);

        await this.pubSub.publish(PublishStateEnum.TASK_DELETED, {
            [PublishStateEnum.TASK_DELETED]: task,
        });

        return task;
    }

    /**
     * Complete my task
     * @param accessTokenData
     * @param taskId
     * @param select
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Task)
    public async completedMyTask(
        @CurrentUser() accessTokenData: AccessTokenData,
        @Args('id') taskId: string,
        @PrismaSelect() select: Prisma.TaskSelect,
    ): Promise<Task> {
        const task: Task = await this.taskService.completedMyTask(accessTokenData.id, taskId, select);

        await this.pubSub.publish(PublishStateEnum.TASK_UPDATED, {
            [PublishStateEnum.TASK_UPDATED]: task,
        });

        return task;
    }

    /**
     * Publish create task
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Task, {
        name: PublishStateEnum.TASK_CREATED,
        filter: (payload, _args, context) => {
            return payload[PublishStateEnum.TASK_CREATED].userId === context.extra.user.id;
        },
    })
    public async createdTask(): Promise<AsyncIterator<Task>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TASK_CREATED);
    }

    /**
     * Publish update task
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Task, {
        name: PublishStateEnum.TASK_UPDATED,
        filter: (payload, _args, context) => {
            return payload[PublishStateEnum.TASK_UPDATED].userId === context.extra.user.id;
        },
    })
    public async updatedTask(): Promise<AsyncIterator<Task>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TASK_UPDATED);
    }

    /**
     * Publish delete task
     */
    @UseGuards(new RolesGuard([UserRole.ROLE_USER]))
    @Subscription(() => Task, {
        name: PublishStateEnum.TASK_DELETED,
        filter: (payload, _args, context) => {
            return payload[PublishStateEnum.TASK_DELETED].userId === context.extra.user.id;
        },
    })
    public async deletedTask(): Promise<AsyncIterator<Task>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TASK_DELETED);
    }
}
