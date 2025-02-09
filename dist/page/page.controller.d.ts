import { PageService } from './service/page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
export declare class PageController {
    private readonly pageService;
    constructor(pageService: PageService);
    create(createPageDto: CreatePageDto): Promise<{
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
