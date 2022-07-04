import { PrismaService } from '../prismaservice/prisma';
export declare class CitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").City[]>;
    filter(query: string): import(".prisma/client").PrismaPromise<import(".prisma/client").City[]>;
}
