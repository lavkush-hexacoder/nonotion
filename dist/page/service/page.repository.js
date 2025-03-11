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
exports.PageRepository = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PageRepository = class PageRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, userId) {
        return this.prisma.page.create({
            data: {
                ...data,
            },
            include: { userToPageMap: true },
        });
    }
    async findAll() {
        return this.prisma.page.findMany({
            where: { parentId: null },
        });
    }
    async findOne(id) {
        return this.prisma.page.findUnique({
            where: { id },
            include: { children: true },
        });
    }
    async update(id, data) {
        return this.prisma.page.update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma.page.delete({ where: { id } });
    }
};
exports.PageRepository = PageRepository;
exports.PageRepository = PageRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PageRepository);
//# sourceMappingURL=page.repository.js.map