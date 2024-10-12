import React from 'react';
import { useForecastQuery } from '../services/useWeatherQuery';

interface ForecastProps {
  location: string;
}

const Forecast: React.FC<ForecastProps> = ({ location }) => {
  const { data: forecastData, isLoading, error } = useForecastQuery(location);

  if (isLoading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {(error as Error).message}</div>;
  if (!forecastData || !forecastData.list) return null;

  const dailyForecast = forecastData.list.filter((_: any, index: number) => index % 8 === 0).slice(0, 5);

  return (
    <div>
      <div className="mt-8 flex items-center ml-4">
        <p className="font-medium uppercase">5 DAY FORECAST</p>
      </div>
      <hr className="my-1" />
      <div className="flex justify-between gap-4">
        {dailyForecast.map((day: any, index: number) => (
          <div key={index} className="flex flex-col items-center mx-4">
            <p className="font-medium">{new Date(day.dt * 1000).toLocaleDateString('pl-PL', { weekday: 'short' })}</p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
              alt="ikona pogody" 
            />
            <p className="font-medium">{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;