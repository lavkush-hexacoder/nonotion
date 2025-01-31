import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePageDto } from '../dto/create-page.dto';
import { UpdatePageDto } from '../dto/update-page.dto';
import { Page } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePageDto): Promise<Page> {
    return this.prisma.page.create({
      data: {
        title: data.title,
        userToPageMap: {
          create: {
            role: 'OWNER',
            userId: data.userId,
          },
        },
      },
      include: { userToPageMap: true },
    });
  }

  async findAll(): Promise<Page[]> {
    return this.prisma.page.findMany();
  }

  async findOne(id: string): Promise<Page | null> {
    return this.prisma.page.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdatePageDto): Promise<Page> {
    return this.prisma.page.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Page> {
    return this.prisma.page.delete({ where: { id } });
  }
}
