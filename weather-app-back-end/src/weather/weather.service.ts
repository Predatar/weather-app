import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import 'dotenv/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Weather, WeatherDocument } from 'src/schemas/weather.schema';
import { Model } from 'mongoose';
import { IWeatherData } from 'src/types';

@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.WEATHER_API_KEY;
  private readonly apiUrl = process.env.WEATHER_API_URL;
  private readonly apiUrlCoords = process.env.WEATHER_API_URL_COORDS;

  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>,
  ) {}

  async getWeather(city: string) {
    const cacheKey = `weather-${city}`;
    const cacheWeather = await this.cacheManager.get(cacheKey);

    if (cacheWeather) {
      return cacheWeather;
    }

    const url = this.apiUrl
      .replace('{city_name}', city)
      .replace('{API_key}', this.apiKey);

    const response: IWeatherData = await firstValueFrom(
      this.httpService.get(url).pipe(map((resolve) => resolve.data)),
    );

    await this.cacheManager.set(cacheKey, response);

    await this.saveWeatherData(response);

    return response;
  }

  async getWeatherByCoords(lat: string, lon: string) {
    const cacheKey = `weather-coords-${lat}-${lon}`;
    const cacheWeather = await this.cacheManager.get(cacheKey);

    if (cacheWeather) {
      return cacheWeather;
    }

    const url = this.apiUrlCoords
      .replace('{lat}', lat)
      .replace('{lon}', lon)
      .replace('{API_key}', this.apiKey);

    const response = this.httpService
      .get(url)
      .pipe(map((resolve) => resolve.data));

    await this.cacheManager.set(cacheKey, response);

    return response;
  }

  async saveWeatherData(data: IWeatherData) {
    const weatherData = new this.weatherModel({
      name: data.name,
      icon: data.weather[0].icon,
      weather: data.weather[0].description,
      temp: data.main.temp,
    });

    await this.weatherModel.findOneAndDelete({ name: data.name });

    await weatherData.save();
  }

  async getWeatherHistory(limit = 100) {
    return this.weatherModel
      .find()
      .sort({ requestedAt: -1 })
      .limit(limit)
      .exec();
  }
}
