import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UserRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateUserDto): Promise<{
        name: string;
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
    update(id: string, data: CreateUserDto): Promise<{
        name: string;
        id: string;
        updatedAt: Date;
        userToPageMapId: string | null;
    }>;
}
