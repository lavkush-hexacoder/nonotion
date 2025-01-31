import { Injectable } from '@nestjs/common';
import { CreatePageDto } from '../dto/create-page.dto';
import { UpdatePageDto } from '../dto/update-page.dto';
import { PageRepository } from './page.repository';

@Injectable()
export class PageService {
  constructor(private readonly pageRepository: PageRepository) {}
  create(createPageDto: CreatePageDto) {
    return this.pageRepository.create(createPageDto);
  }

  findAll() {
    return `This action returns all Page`;
  }

  findOne(id: string) {
    return `This action returns a #${id} Page`;
  }

  update(id: string, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} Page`;
  }

  remove(id: string) {
    return `This action removes a #${id} Page`;
  }
}
