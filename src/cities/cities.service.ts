import { PrismaService } from '../prismaservice/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.city.findMany({
      take: 100,
      orderBy: { nomCommune: 'asc' },
    });
  }

  filter(query: string) {
    return this.prisma.city.findMany({
      where: {
        OR: [
          {
            codePostal: { contains: query, mode: 'insensitive' },
          },
          {
            codeCommune: { contains: query, mode: 'insensitive' },
          },
          {
            nomCommune: { contains: query, mode: 'insensitive' },
          },
          {
            libelleAcheminement: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      take: 100,
      orderBy: { nomCommune: 'asc' },
    });
  }
}
