import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [UserModule, PageModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
