import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Transport, TransportType } from '@prisma/client';

@Injectable()
export class ProcessTransportService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Retrieves a transport record based on the specified address and method.
     *
     * @param {string} address - The URL address to match the transport record.
     * @param {TransportType} method - The transport method to match.
     * @return {Promise<Transport | null>} A promise that resolves to the transport record if found, or null if not found.
     */
    public async getRequestTransport(address: string, method: TransportType): Promise<Transport | null> {
        return this.prismaService.transport.findFirstOrThrow({
            where: {
                url: {
                    equals: address,
                },
                method: {
                    equals: method,
                },
                isAllow: {
                    equals: true,
                },
                archiveAt: {
                    equals: null,
                },
                deletedAt: {
                    equals: null,
                },
            },
        });
    }

    /**
     * Extracts the subpath from a given full path by removing the base path and any query parameters.
     *
     * @param {string} fullPath - The complete path to process.
     * @param {string} basePath - The base path to remove from the full path.
     * @return {string} The extracted subpath with the base path and query parameters removed.
     */
    public extractPath(fullPath: string, basePath: string): string {
        let subPath = fullPath.replace(basePath, '');
        subPath = decodeURIComponent(subPath);

        const queryParamIndex = subPath.indexOf('?');

        if (queryParamIndex !== -1) {
            subPath = subPath.substring(0, queryParamIndex);
        }

        return subPath.replace(/^\/+/, '');
    }
}
