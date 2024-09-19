import { Injectable } from '@nestjs/common';
import { UpdateTransportInput } from './dto/update-transport.input';
import { CreateOneTransportArgs, FindManyTransportArgs, FindUniqueTransportArgs, Transport } from '../@generated';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class TransportsService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Creates a new transport entry in the database using the provided arguments and selection options.
     *
     * @param {CreateOneTransportArgs} args - The arguments used to create a new transport.
     * @param {Prisma.TransportSelect} select - The specific fields to select from the created transport.
     *
     * @return {Promise<Transport>} A promise that resolves to the newly created transport.
     */
    public async create(args: CreateOneTransportArgs, select: Prisma.TransportSelect): Promise<Transport> {
        return this.prismaService.transport.create({
            ...args,
            select,
        });
    }

    /**
     * Finds and returns a list of Transport entities based on the specified criteria.
     *
     * @param {FindManyTransportArgs} args - The arguments to filter and sort the Transport entities.
     * @param {Prisma.TransportSelect} select - The fields to be selected from the Transport entities.
     * @return {Promise<Transport[]>} A promise that resolves to an array of Transport entities.
     */
    public async findAll(args: FindManyTransportArgs, select: Prisma.TransportSelect): Promise<Transport[]> {
        return this.prismaService.transport.findMany({
            ...args,
            select,
        });
    }

    /**
     * Finds a single Transport entity based on the provided criteria.
     *
     * @param {FindUniqueTransportArgs} args - The arguments specifying the selection criteria.
     * @param {Prisma.TransportSelect} select - The fields to be selected from the Transport entity.
     * @return {Promise<Transport | null>} A promise that resolves to the found Transport entity or null if no entity matches the criteria.
     */
    public async findOne(args: FindUniqueTransportArgs, select: Prisma.TransportSelect): Promise<Transport | null> {
        return this.prismaService.transport.findUniqueOrThrow({
            ...args,
            select,
        });
    }

    // update(id: number, updateTransportInput: UpdateTransportInput) {
    //     return `This action updates a #${id} transport`;
    // }
    //
    // remove(id: number) {
    //     return `This action removes a #${id} transport`;
    // }
}
