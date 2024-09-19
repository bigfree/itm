import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { ProcessTransportService } from './process-transport.service';
import { Transport, TransportType } from '@prisma/client';

@Controller('process-transport')
export class ProcessTransportController {
    constructor(private readonly processTransportService: ProcessTransportService) {}

    @Get(['/', '*', ':path'])
    public async getProcessTransport(@Req() request: Request): Promise<Transport> {
        const extractUrl = this.processTransportService.extractPath(request.url, 'process-transport');
        try {
            const transport = await this.processTransportService.getRequestTransport(
                extractUrl,
                request.method as TransportType,
            );
            console.log(transport);
            return transport;
            // TODO: add transport to queue process
        } catch (exception) {
            throw new HttpException('Transport not allowed', HttpStatus.FORBIDDEN);
        }
    }
}
