import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WeatherDocument = HydratedDocument<Weather>;

@Schema()
export class Weather {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  weather: string;

  @Prop({ required: true })
  temp: number;

  @Prop({ required: true })
  icon: string;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);
