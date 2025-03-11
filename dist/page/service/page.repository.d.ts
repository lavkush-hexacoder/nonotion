import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePageDto } from '../dto/create-page.dto';
import { UpdatePageDto } from '../dto/update-page.dto';
import { Page } from '@prisma/client';
export declare class PageRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePageDto, userId: string): Promise<Page>;
    findAll(): Promise<Page[]>;
    findOne(id: string): Promise<Page | null>;
    update(id: string, data: UpdatePageDto): Promise<Page>;
    remove(id: string): Promise<Page>;
}
