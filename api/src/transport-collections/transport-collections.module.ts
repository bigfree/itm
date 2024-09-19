import { Module } from '@nestjs/common';
import { TransportCollectionsService } from './transport-collections.service';
import { TransportCollectionsResolver } from './transport-collections.resolver';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserRoleService } from '../common/services/user-role/user-role.service';
import { PubSubModule } from '../common/pubsub/pubsub.module';

@Module({
    imports: [PubSubModule],
    providers: [TransportCollectionsResolver, TransportCollectionsService, PrismaService, UserRoleService],
})
export class TransportCollectionsModule {}
