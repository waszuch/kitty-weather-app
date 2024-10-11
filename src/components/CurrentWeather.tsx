import React from 'react';
import { TiWeatherSunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf, FaWind } from "react-icons/fa";

interface CurrentWeatherProps {
  weatherData: any;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  if (!weatherData) {
    return null; 
  }

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

