import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData, fetchForecastData, WeatherData, ForecastResponse } from './weatherApi';

export const useWeatherQuery = (location: string) => {
  return useQuery<WeatherData, Error>({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
    enabled: !!location,
  });
};

export const useForecastQuery = (location: string) => {
  return useQuery<ForecastResponse, Error>({
    queryKey: ['forecast', location],
    queryFn: () => fetchForecastData(location),
    enabled: !!location,
  });
};