import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AprovacaoDTO } from 'src/dto/aprovacaoDto';
import { EnderecoDTO } from 'src/dto/enderecoDto';
import { FreteDTO } from 'src/dto/freteDto';
//import { HydratedDocument } from 'mongoose';

export type LojistaDocument = Lojista & Document;
//export type LojistaDocument = HydratedDocument<Lojista>;

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
