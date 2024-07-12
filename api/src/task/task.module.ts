import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { PubSubModule } from '../common/pubsub/pubsub.module';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';

@Module({
    imports: [PubSubModule],
    providers: [TaskResolver, TaskService, PrismaService, UserRoleService],
})
export class TaskModule {}
