import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LojistaController } from './lojista.controller';
import { LojistaService } from './lojista.service';
import { LojistaSchema } from './schemas/lojista.schema';
import { Middleware } from './middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'lojista', schema: LojistaSchema }]),
  ],
  controllers: [LojistaController],
  providers: [LojistaService],
  exports: [LojistaModule],
})
export class LojistaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware).forRoutes(LojistaController);
  }
}
