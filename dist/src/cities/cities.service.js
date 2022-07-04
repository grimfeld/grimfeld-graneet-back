"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesService = void 0;
const prisma_1 = require("../prismaservice/prisma");
const common_1 = require("@nestjs/common");
let CitiesService = class CitiesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.city.findMany({
            take: 100,
            orderBy: { nomCommune: 'asc' },
        });
    }
    filter(query) {
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
};
CitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], CitiesService);
exports.CitiesService = CitiesService;
//# sourceMappingURL=cities.service.js.map