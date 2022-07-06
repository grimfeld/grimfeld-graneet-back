import { PrismaService } from './../prismaservice/prisma';
import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

describe('CitiesController', () => {
  let controller: CitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService, PrismaService],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('cities endpoint', () => {
    it('should return an array of 100 cities', async () => {
      const result = await controller.findAll();
      expect(result).toBeDefined();
      expect(result).toHaveLength(100);
    });
  });

  describe('filter endpoint', () => {
    it('should find a specific city', async () => {
      expect(await controller.filter('93800')).toStrictEqual([
        {
          codePostal: '93800',
          codeCommune: '93031',
          nomCommune: 'Épinay-sur-Seine',
          libelleAcheminement: 'EPINAY SUR SEINE',
        },
      ]);
    });
  });
});
