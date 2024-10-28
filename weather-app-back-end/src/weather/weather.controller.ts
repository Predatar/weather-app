import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { WeatherService } from 'src/weather/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('get')
  getWeather(@Query('city') city: string): any {
    return this.weatherService.getWeather(city);
  }

  @Get('get/coords')
  getWeatherByCoords(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.weatherService.getWeatherByCoords(lat, lon)
  }

  @Get('history')
  async getHistory() {
    return this.weatherService.getWeatherHistory();
  }
}
