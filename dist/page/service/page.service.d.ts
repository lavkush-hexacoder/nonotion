import { CreatePageDto } from '../dto/create-page.dto';
import { UpdatePageDto } from '../dto/update-page.dto';
import { PageRepository } from './page.repository';
export declare class PageService {
    private readonly pageRepository;
    constructor(pageRepository: PageRepository);
    create(createPageDto: CreatePageDto, userId: string): Promise<{
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
    }>;
    update(id: string, updatePageDto: UpdatePageDto): Promise<{
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
    }>;
    remove(id: string): string;
}
