import { Module } from '@nestjs/common';
import { TransportsService } from './transports.service';
import { TransportsResolver } from './transports.resolver';
import { PubSubModule } from '../common/pubsub/pubsub.module';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
    imports: [PubSubModule],
    providers: [TransportsResolver, TransportsService, PrismaService],
})
export class TransportsModule {}
