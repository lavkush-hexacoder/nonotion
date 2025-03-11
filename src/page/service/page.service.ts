import { Injectable } from '@nestjs/common';
import { CreatePageDto } from '../dto/create-page.dto';
import { UpdatePageDto } from '../dto/update-page.dto';
import { PageRepository } from './page.repository';

@Injectable()
export class PageService {
  constructor(private readonly pageRepository: PageRepository) {}
  create(createPageDto: CreatePageDto, userId: string) {
    return this.pageRepository.create(createPageDto, userId);
  }

  findAll() {
    return this.pageRepository.findAll();
  }

  findOne(id: string) {
    return this.pageRepository.findOne(id);
  }

  update(id: string, updatePageDto: UpdatePageDto) {
    return this.pageRepository.update(id, updatePageDto);
  } 

  remove(id: string) {
    return this.pageRepository.remove(id);
  }
}
