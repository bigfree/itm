import { Module } from '@nestjs/common';
import { NoteConfigService } from './note-config.service';
import { NoteConfigResolver } from './note-config.resolver';
import { PubSubModule } from '../common/pubsub/pubsub.module';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';

@Module({
    imports: [PubSubModule],
    providers: [NoteConfigResolver, NoteConfigService, PrismaService, UserRoleService],
})
export class NoteConfigModule {}
