/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lojista, LojistaDocument } from './schemas/lojista.schema';
import { LojistaDTO } from '../dto/lojistaDto';
import { MinhaLojaDTO } from '../dto/minhaLojaDto';
import { RespostaPadrao } from 'src/Utils/respostaPadrao';
import { FreteDTO } from '../dto/freteDto';
import { Validator } from '../Utils/validator'

@Injectable()
export class LojistaService {
  private validator: Validator = new Validator();
  constructor(
    @InjectModel('lojista') private LojistaModel: Model<LojistaDocument>
  ) {}
  response = new RespostaPadrao()
  mongoose = require('mongoose');

  async create(LojistaDTO: LojistaDTO): Promise<Lojista> {
    const lojista = new this.LojistaModel(LojistaDTO);
    lojista.dataCriacao = new Date(Date.now());
    this.validator.print('salvando lojista: '+JSON.stringify(LojistaDTO));
    return await lojista.save();
  }

  async findAll(): Promise<Lojista[]> {
    return await this.LojistaModel.find().exec();
  }

  async getById(id: string): Promise<RespostaPadrao> {
    this.response = new RespostaPadrao();
   
    this.validator.idIsValid(id);

    let lojistaDocument: LojistaDocument;
    
    // eslint-disable-next-line prefer-const
    lojistaDocument = await this.LojistaModel.findById(id).exec();
    if (!lojistaDocument) {
      throw new NotFoundException("Lojista não encontrado para o id "+id);
    }
    this.response.setMensagem("lojista encontrado com sucesso");
    this.response.setConteudo(lojistaDocument);
    return this.response.respostaPadrao(true, 200);
  }
  async updateMinhaLoja(lojistaId: string, request: MinhaLojaDTO): Promise<RespostaPadrao> {
    this.validator.idIsValid(lojistaId);
    this.validator.print(`lojista: ${lojistaId}`);

    let lojistaDocument: LojistaDocument;
    // eslint-disable-next-line prefer-const
    lojistaDocument = await this.LojistaModel.findById(lojistaId).exec();
    if (!lojistaDocument) {
      throw new NotFoundException("Lojista não encontrado para o id "+lojistaId);
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
