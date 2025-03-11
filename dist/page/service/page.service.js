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
exports.PageService = void 0;
const common_1 = require("@nestjs/common");
const page_repository_1 = require("./page.repository");
let PageService = class PageService {
    constructor(pageRepository) {
        this.pageRepository = pageRepository;
    }
    create(createPageDto, userId) {
        return this.pageRepository.create(createPageDto, userId);
    }
    findAll() {
        return this.pageRepository.findAll();
    }
    findOne(id) {
        return this.pageRepository.findOne(id);
    }
    update(id, updatePageDto) {
        return this.pageRepository.update(id, updatePageDto);
    }
    remove(id) {
        return this.pageRepository.remove(id);
    }
};
exports.PageService = PageService;
exports.PageService = PageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [page_repository_1.PageRepository])
], PageService);
//# sourceMappingURL=page.service.js.map