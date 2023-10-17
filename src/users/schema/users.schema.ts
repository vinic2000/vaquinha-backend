import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, type: String })
  nome: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  senha: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
