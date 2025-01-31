import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prismaService.user.create({ data });
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async update(id: string, data: CreateUserDto) {
    return this.prismaService.user.update({ where: { id }, data });
  }
}
