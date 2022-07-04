import { PrismaService } from './../prismaservice/prisma';
import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService, PrismaService],
})
export class CitiesModule {}
