import { Module } from '@nestjs/common';
import { PageService } from './service/page.service';
import { PageController } from './page.controller';
import { PageRepository } from './service/page.repository';

@Module({
  controllers: [PageController],
  providers: [PageService, PageRepository],
})
export class PageModule {}
