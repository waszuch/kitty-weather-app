export const fetchWeatherData = async (location: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7e22acd8ed2746705687da4f4f18eac8&units=metric`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');}
  const data = await response.json();
  return data;
};