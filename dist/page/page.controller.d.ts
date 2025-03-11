import { PageService } from './service/page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
export declare class PageController {
    private readonly pageService;
    constructor(pageService: PageService);
    create(createPageDto: CreatePageDto): Promise<{
        id: string;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userToPageMapId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
    update(id: string, updatePageDto: UpdatePageDto): Promise<{
        id: string;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        parentId: string | null;
        createdAt: Date;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
}
