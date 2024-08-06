import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteResolver } from './note.resolver';
import { PubSubModule } from '../common/pubsub/pubsub.module';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';
import { TaskService } from '../task/task.service';

@Module({
    imports: [PubSubModule],
    providers: [NoteResolver, NoteService, TaskService, PrismaService, UserRoleService],
})
export class NoteModule {}
