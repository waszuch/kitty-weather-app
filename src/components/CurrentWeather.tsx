import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { WiDaySunny, WiNightClear, WiCloudy, WiSnow, WiThunderstorm, WiDust , WiHumidity, WiDayRain, WiNightRain} from "react-icons/wi";
import { FaThermometerHalf, FaWind } from "react-icons/fa";
import { fetchWeatherData } from '../services/weatherApi';

interface CurrentWeatherProps {
  location: string;
}

const getWeatherIcon = (condition: string, dt: number, sunrise: number, sunset: number) => {
  const isDay = dt > sunrise && dt < sunset;

  switch (condition.toLowerCase()) {
    case 'clear':
      return isDay ? <WiDaySunny size={50} /> : <WiNightClear size={50} />;
    case 'clouds':
      return <WiCloudy size={50} /> 
    case 'rain':
      return isDay ? <WiDayRain size={50} /> : <WiNightRain size={50} />;
    case 'snow':
      return <WiSnow size={50} />;
    case 'thunderstorm':
      return <WiThunderstorm size={50} />;
    case 'dust':
    case 'sand':
    case 'ash':
      return <WiDust size={50} />;
    default:
      return isDay ? <WiDaySunny size={50} /> : <WiNightClear size={50} />;
  }
};const CurrentWeather: React.FC<CurrentWeatherProps> = ({ location }) => {
  const { data: weatherData, isLoading, error } = useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
    enabled: !!location
  });

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Wystąpił błąd: {(error as Error).message}</div>;
  if (!weatherData) return null;

  return (
    <div className="flex flex-col items-center w-full">
      <h1>{weatherData.name}</h1>
      <div className="flex flex-col items-center mt-2">
        {getWeatherIcon(
          weatherData.weather[0].main,
          weatherData.dt,
          weatherData.sys.sunrise,
          weatherData.sys.sunset
        )}
        <h1 className="mt-2">{Math.round(weatherData.main.temp)}°C</h1>
      </div>
      <div className="mt-10 flex w-full justify-between">
        <div className="flex flex-col items-center">
          <WiHumidity size={50} />
          <h1>{weatherData.main.humidity}%</h1>
        </div>
        <div className="flex flex-col items-center">
          <FaThermometerHalf size={50} />
          <h1>{weatherData.main.temp}°C</h1>
        </div>
        <div className="flex flex-col items-center">
          <FaWind size={50} />
          <h1>{Math.round(weatherData.wind.speed)} km/h</h1>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather

