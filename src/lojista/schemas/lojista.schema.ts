import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AprovacaoDto } from 'src/dto/aprovacaoDTO';
import { EnderecoDto } from 'src/dto/enderecoDTO';
import { FreteDto } from 'src/dto/freteDTO';

export type LojistaDocument = Lojista & Document;

@Schema()
export class Lojista {
  @Prop()
  email: string;

  @Prop()
  aprovacao: AprovacaoDto;

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
  enderecos: Array<EnderecoDto>;

  @Prop()
  urlSite: string;

  @Prop()
  nomeExebicao: string;

  @Prop()
  frete: FreteDto;
}

export const LojistaSchema = SchemaFactory.createForClass(Lojista);
