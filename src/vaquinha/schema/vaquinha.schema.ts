import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<Vaquinha>;

@Schema()
export class Vaquinha {
  @Prop({ required: true, type: String })
  name: string;

  @Prop()
  description: string;

  @Prop()
  member: string[];

  @Prop({ required: true })
  adms: string[];

  @Prop({ type: Number })
  totalValue: number;
}

export const vaquinhaSchema = SchemaFactory.createForClass(Vaquinha);
