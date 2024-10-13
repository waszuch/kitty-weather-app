export interface WeatherData {
  dt:number

  name:string

  wind:{
    speed: number
  }
  main: {
    temp: number;
    humidity:number
  };
  weather: Array<{
    icon: string;
    description: string;
    main:string
  }>;

  sys: {
    type: number
    id: number
    country: string,
    sunrise: number,
    sunset: number,
  }
  
}

export interface ForecastResponse {
  list: Array<ForecastDay>;
}

export interface ForecastDay {
  dt: number;
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  dt_txt: string;
}

export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7e22acd8ed2746705687da4f4f18eac8&units=metric`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data as WeatherData;
};

export const fetchForecastData = async (location: string): Promise<ForecastResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7e22acd8ed2746705687da4f4f18eac8&units=metric`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  const data = await response.json();
  return data as ForecastResponse;
};