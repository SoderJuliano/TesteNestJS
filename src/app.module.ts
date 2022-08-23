import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LojistaModule } from './lojista/lojista.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    LojistaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
