import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LojistaModule } from './lojista/lojista.module';

//'mongodb://localhost/nest'
//'mongodb://soder:soder1989@172.18.0.3:27017'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      dbName: 'nest',
    }),
    LojistaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
