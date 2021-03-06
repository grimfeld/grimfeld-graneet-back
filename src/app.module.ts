import { PrismaService } from './prismaservice/prisma';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [CitiesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
