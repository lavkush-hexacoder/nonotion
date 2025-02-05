import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';
import { PrismaModule } from './prisma/prisma.module';
import { RequestLoggerMiddleware } from './_common/middleware/request-log.middleware';
@Module({
  imports: [UserModule, PageModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('/');
  }
}
