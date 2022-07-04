import { CitiesService } from './cities.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").City[]>;
    filter(query: string): import(".prisma/client").PrismaPromise<import(".prisma/client").City[]>;
}
