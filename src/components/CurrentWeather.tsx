import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { TiWeatherSunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf, FaWind } from "react-icons/fa";
import { fetchWeatherData } from '../services/weatherApi';

interface CurrentWeatherProps {
  location: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ location }) => {
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
        <TiWeatherSunny size={50} />
        <h1 className="mt-2">{weatherData.main.temp}°C</h1>
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
          <h1>{weatherData.wind.speed} km/h</h1>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
