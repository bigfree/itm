import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateOneTransportCollectionArgs, FindManyTransportCollectionArgs, TransportCollection } from '../@generated';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransportCollectionsService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Creates a new transport collection in the database.
     *
     * @param {CreateOneTransportCollectionArgs} createOneTransportCollectionArgs - The arguments required to create a new transport collection.
     * @param {Prisma.TransportCollectionSelect} select - The fields to select from the newly created transport collection.
     * @return {Promise<TransportCollection>} A promise that resolves to the created transport collection.
     */
    public async create(
        createOneTransportCollectionArgs: CreateOneTransportCollectionArgs,
        select: Prisma.TransportCollectionSelect,
    ): Promise<TransportCollection> {
        // TODO: add logs
        return this.prismaService.transportCollection.create({
            ...createOneTransportCollectionArgs,
            select,
        });
    }

    /**
     * Retrieves multiple transport collections based on given arguments.
     *
     * @param {FindManyTransportCollectionArgs} findManyTransportCollectionArgs - Arguments to filter and define the transport collections that need to be retrieved.
     * @param {Prisma.TransportCollectionSelect} select - Specific fields to be selected from the transport collections.
     * @return {Promise<TransportCollection[]>} - A promise that resolves to an array of transport collections.
     */
    public async findAll(
        findManyTransportCollectionArgs: FindManyTransportCollectionArgs,
        select: Prisma.TransportCollectionSelect,
    ): Promise<TransportCollection[]> {
        // TODO: add logs
        return this.prismaService.transportCollection.findMany({
            ...findManyTransportCollectionArgs,
            select,
        });
    }

    // findOne(id: number) {
    //     return `This action returns a #${id} transportCollection`;
    // }
    //
    // update(id: number, updateTransportCollectionInput: UpdateTransportCollectionInput) {
    //     return `This action updates a #${id} transportCollection`;
    // }
    //
    // remove(id: number) {
    //     return `This action removes a #${id} transportCollection`;
    // }
}
