import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData, fetchForecastData } from './weatherApi';

export const useWeatherQuery = (location: string) => {
  return useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
    enabled: !!location,
  });
};

export const useForecastQuery = (location: string) => {
  return useQuery({
    queryKey: ['forecast', location],
    queryFn: () => fetchForecastData(location),
    enabled: !!location,
  });
};