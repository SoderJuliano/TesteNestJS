/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lojista, LojistaDocument } from './schemas/lojista.schema';
import { LojistaDTO } from '../dto/lojistaDto';
import { MinhaLojaDTO } from '../dto/minhaLojaDto';
import { RespostaPadrao } from 'src/Utils/respostaPadrao';
import { FreteDTO } from '../dto/freteDto';
import { Validator } from '../Utils/validator';
import { Log } from '../Utils/print-enuns';

@Injectable()
export class LojistaService {
  private validator: Validator = new Validator();
  constructor(
    @InjectModel('lojista') private LojistaModel: Model<LojistaDocument>
  ) {}
  response = new RespostaPadrao()
  mongoose = require('mongoose');

  async getByEmail(email: string): Promise<RespostaPadrao> {
    const lojista = await this.LojistaModel.findOne({email}).exec();
    if (!lojista) {
      this.validator.print(`Lojista não encontrado com o email ${email}`);
      throw new NotFoundException(`Lojista não encontrado com o email ${email}`);
    }
    this.validator.print(`Lojista encontrado, email: ${email}`);
    this.response = new RespostaPadrao();
    this.response.setConteudo(lojista);
    return this.response;
  }

  async create(LojistaDTO: LojistaDTO): Promise<Lojista> {
    const lojista = new this.LojistaModel(LojistaDTO);
    lojista.dataCriacao = new Date(Date.now());
    this.validator.print('salvando lojista: '+JSON.stringify(LojistaDTO));
    /*lojista.save(function (err, doc) {
     console.log(`Lojista salvo com o objectId ${doc.id}`);
    });
   return lojista;*/
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
      this.validator.printType("Lojista não encontrado para o id "+id, Log.ERROR);
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
      this.validator.printType("Lojista não encontrado para o id "+lojistaId, Log.ERROR);
      throw new NotFoundException("Lojista não encontrado para o id "+lojistaId);
    }
    lojistaDocument.nomeExebicao = request.nomeExibicao;
    const frete = new FreteDTO();
    frete.setTempoPreparo(request.tempoCD);
    lojistaDocument.frete = frete;
    lojistaDocument.dataModificacaoDocumento = new Date(Date.now());
    lojistaDocument.save();
    this.response = new RespostaPadrao();
    this.response.setConteudo({"idLojista":lojistaId,"message": "Processado com sucesso."});
    /*this.response.setMensagem("Processado com sucesso.");
    this.response.setConteudo(lojistaDocument);*/
    return this.response.respostaPadrao(true, 200);
  }

  async delete(id: string): Promise<RespostaPadrao>{
    this.response = new RespostaPadrao();
    const lojista = await this.LojistaModel
      .findByIdAndRemove({ _id: id })
      .exec();
      this.response.setMensagem("Lojista Deletado");
      this.response.setConteudo(lojista);
    return this.response;
  }

  async getAllEmail(): Promise<RespostaPadrao>{
    this.response = new RespostaPadrao();
    const emails = await this.LojistaModel.find().select('email numeroDocumento').exec();
    this.validator.print('Busca por emails e numeroDocumentos executada');
    this.response.respostaPadrao(true, 200);
    this.response.setConteudo(emails);
    return this.response;
  }
}
