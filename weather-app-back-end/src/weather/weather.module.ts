import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from 'src/weather/weather.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Weather, WeatherSchema } from 'src/schemas/weather.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Weather.name, schema: WeatherSchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
