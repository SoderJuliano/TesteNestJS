import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lojista, LojistaDocument } from './schemas/lojista.schema';
import { LojistaDto } from '../dto/lojista.dto';

@Injectable()
export class LojistaService {
  constructor(
    @InjectModel('lojista') private LojistaModel: Model<LojistaDocument>,
  ) {}

  async create(lojistaDto: LojistaDto): Promise<Lojista> {
    const Lojista = new this.LojistaModel(lojistaDto);
    console.log('salvando lojista');
    console.log(lojistaDto);
    return await Lojista.save();
  }

  async findAll(): Promise<Lojista[]> {
    return await this.LojistaModel.find().exec();
  }

  async getById(id: number): Promise<LojistaDto> {
    return await this.LojistaModel.findById(id).exec();
  }
}
