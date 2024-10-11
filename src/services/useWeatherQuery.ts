import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from './weatherApi';
export const useWeatherQuery = (location: string) => {
  return useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
    enabled: !!location,
  });
};
