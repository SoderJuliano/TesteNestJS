import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LojistaDocument = Lojista & Document;

@Schema()
export class Lojista {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  nomeLoja: string;
}

export const LojistaSchema = SchemaFactory.createForClass(Lojista);
