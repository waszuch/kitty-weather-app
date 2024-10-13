import { useWeatherQuery } from './useWeatherQuery';
import kotekSlonce from '../assets/kotek-słonce.png';
import kotekChmury from '../assets/kotek-pochmurno.png';
import kotekDeszcz from '../assets/kotek-deszcz.png';
import kotekSnieg from '../assets/kotek-snieg.png';
import kotekMgła from '../assets/kotek-mgła.png';

export const useCatImage = (location: string) => {
  const { data: weatherData } = useWeatherQuery(location);

  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    return kotekSlonce; 
  }

  const weatherCondition = weatherData.weather[0].main.toLowerCase();

  switch (weatherCondition) {
    case 'clear':
      return kotekSlonce;
    case 'clouds':
      return kotekChmury;
    case 'rain':
    case 'thunderstorm':
      return kotekDeszcz;
    case 'snow':
      return kotekSnieg;
    case 'mist':
      return kotekMgła;
    default:
      return kotekSlonce; 
  }
};