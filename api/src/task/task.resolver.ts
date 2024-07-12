import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { TaskService } from './task.service';
import {
    CreateOneTaskArgs,
    DeleteOneTaskArgs,
    FindManyTaskArgs,
    FindUniqueTaskArgs,
    Task,
    UpdateOneTaskArgs,
} from '../@generated';
import { UseGuards } from '@nestjs/common';
import { GqlThrottlerGuard } from '../common/guards/gql-throttle.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { UserRole } from '@prisma/client';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { PublishStateEnum } from '../common/pubsub/publish-state.enum';
import { PubSub } from 'graphql-subscriptions';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AccessTokenData } from '../common/types/authorize.types';

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
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Task)
    public async createTask(@Args() createOneTaskArgs: CreateOneTaskArgs): Promise<Task> {
        const task: Task = await this.taskService.create(createOneTaskArgs);

        await this.pubSub.publish(PublishStateEnum.TASK_CREATED, {
            [PublishStateEnum.TASK_CREATED]: task,
        });

        return task;
    }

    /**
     * Get all tasks
     * @param findManyTaskArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => [Task], { name: 'tasks' })
    public async findAll(@Args() findManyTaskArgs: FindManyTaskArgs) {
        return this.taskService.findAll(findManyTaskArgs);
    }

    /**
     * Get unique task
     * @param findUniqueTaskArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Query(() => Task, { name: 'task' })
    public async findOne(@Args() findUniqueTaskArgs: FindUniqueTaskArgs): Promise<Task | null> {
        return this.taskService.findOne(findUniqueTaskArgs);
    }

    /**
     * Update task
     * @param updateOneTaskArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Task)
    public async updateTask(@Args() updateOneTaskArgs: UpdateOneTaskArgs): Promise<Task> {
        const task: Task = await this.taskService.update(updateOneTaskArgs);

        await this.pubSub.publish(PublishStateEnum.TASK_UPDATED, {
            [PublishStateEnum.TASK_UPDATED]: task,
        });

        return task;
    }

    /**
     * Delete task
     * @param deleteOneTaskArgs
     */
    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Task)
    public async removeTask(@Args() deleteOneTaskArgs: DeleteOneTaskArgs): Promise<Task> {
        const task: Task = await this.taskService.remove(deleteOneTaskArgs);

        await this.pubSub.publish(PublishStateEnum.TASK_DELETED, {
            [PublishStateEnum.TASK_DELETED]: task,
        });

        return task;
    }

    @UseGuards(GqlThrottlerGuard, new RolesGuard([UserRole.ROLE_USER]))
    @Mutation(() => Task)
    public async completedMyTask(@CurrentUser() accessTokenData: AccessTokenData, @Args('id') taskId: string) {
        const task: Task = await this.taskService.completedMyTask(accessTokenData.id, taskId);

        await this.pubSub.publish(PublishStateEnum.TASK_UPDATED, {
            [PublishStateEnum.TASK_UPDATED]: task,
        });

        return task;
    }

    /**
     * Publish create task
     */
    @Subscription(() => Task, { name: PublishStateEnum.TASK_CREATED })
    public async createdTask(): Promise<AsyncIterator<Task>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TASK_CREATED);
    }

    /**
     * Publish update task
     */
    @Subscription(() => Task, { name: PublishStateEnum.TASK_UPDATED })
    public async updatedTask(): Promise<AsyncIterator<Task>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TASK_UPDATED);
    }

    /**
     * Publish delete task
     */
    @Subscription(() => Task, { name: PublishStateEnum.TASK_DELETED })
    public async deletedTask(): Promise<AsyncIterator<Task>> {
        return this.pubSub.asyncIterator(PublishStateEnum.TASK_DELETED);
    }
}
