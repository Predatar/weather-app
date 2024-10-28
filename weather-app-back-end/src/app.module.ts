import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { CacheModule } from '@nestjs/cache-manager';
import { cacheTime } from 'src/constant';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CacheModule.register({
      ttl: cacheTime,
      max: 100,
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    WeatherModule,
  ],
})
export class AppModule {}
