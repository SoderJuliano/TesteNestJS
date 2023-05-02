/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lojista, LojistaDocument } from './schemas/lojista.schema';
import { LojistaDTO } from '../dto/lojistaDto';
import { MinhaLojaDTO } from '../dto/minhaLojaDto';
import { RespostaPadrao } from 'src/Utils/respostaPadrao';
import { FreteDTO } from '../dto/freteDto';

@Injectable()
export class LojistaService {
  constructor(
    @InjectModel('lojista') private LojistaModel: Model<LojistaDocument>
  ) {
  }
  response = new RespostaPadrao()

  async create(LojistaDTO: LojistaDTO): Promise<Lojista> {
    const lojista = new this.LojistaModel(LojistaDTO);
    lojista.dataCriacao = new Date(Date.now());
    console.log('salvando lojista');
    console.log(LojistaDTO);
    return await lojista.save();
  }

  async findAll(): Promise<Lojista[]> {
    return await this.LojistaModel.find().exec();
  }

  async getById(id: string): Promise<RespostaPadrao> {
    this.response = new RespostaPadrao();
    let lojistaDocument: LojistaDocument;
    console.log("o id é "+id);
    // eslint-disable-next-line prefer-const
    lojistaDocument = await this.LojistaModel.findById(id).exec();
    if (!lojistaDocument) {
      throw new NotFoundException("Lojista não encontrado");
    }
    
    this.response.setMensagem("lojista encontrado com sucesso");
    this.response.setConteudo(lojistaDocument);
    return this.response.respostaPadrao(true, 200);
  }
  async updateMinhaLoja(lojistaId: string, request: MinhaLojaDTO): Promise<RespostaPadrao> {
    console.log(request.nomeExibicao);
    console.log(`lojista: ${lojistaId}`);
    let lojistaDocument: LojistaDocument;
    // eslint-disable-next-line prefer-const
    lojistaDocument = await this.LojistaModel.findById(lojistaId).exec();
    if (!lojistaDocument) {
      throw new NotFoundException("Lojista não encontrado");
    }
    lojistaDocument.nomeExebicao = request.nomeExibicao;
    const frete = new FreteDTO();
    frete.setTempoPreparo(request.tempoCD);
    lojistaDocument.frete = frete;
    lojistaDocument.save();

    this.response.setMensagem("lojista atualizado com sucesso");
    this.response.setConteudo(lojistaDocument);
    return this.response.respostaPadrao(true, 200);
  }
}
