import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AprovacaoDTO } from 'src/dto/AprovacaoDTO';
import { EnderecoDTO } from 'src/dto/EnderecoDTO';
import { FreteDTO } from 'src/dto/FreteDTO';

export type LojistaDocument = Lojista & Document;

@Schema()
export class Lojista {
  @Prop()
  email: string;

  @Prop()
  aprovacao: AprovacaoDTO;

  @Prop()
  dataCriacao: Date;

  @Prop()
  dataModificacaoDocumento: Date;

  @Prop()
  nomeFantasia: string;

  @Prop()
  razaoSocial: string;

  @Prop()
  numeroDocumento: string;

  @Prop()
  telefoneComercial: string;

  @Prop()
  enderecos: Array<EnderecoDTO>;

  @Prop()
  urlSite: string;

  @Prop()
  nomeExebicao: string;

  @Prop()
  frete: FreteDTO;
}

export const LojistaSchema = SchemaFactory.createForClass(Lojista);
