import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from './owner/owner.module';
import config from '../ormconfig';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(config), OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
