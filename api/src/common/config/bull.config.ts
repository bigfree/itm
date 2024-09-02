import { ConfigService } from '@nestjs/config';
import { BullModuleOptions } from '@nestjs/bull';

export const bullConfig = (configService: ConfigService): BullModuleOptions => ({
    prefix: 'mq_',
    defaultJobOptions: {
        attempts: configService.get<number>('BULL_ATTEMPTS') || 10,
        backoff: {
            type: configService.get<string>('BULL_BACKOFF_TYPE') || 'exponential',
            delay: configService.get<number>('BULL_BACKOFF_DELAY') || 1000,
        },
    },
    redis: {
        host: configService.get<string>('REDIS_HOST') || 'redis',
        port: configService.get<number>('REDIS_PORT') || 6379,
    },
});
