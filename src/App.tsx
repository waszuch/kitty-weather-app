import './style.css'
import kotekDeszcz from './assets/kotek-deszcz.png'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import { useState } from 'react'
import { useWeatherQuery } from './services/useWeatherQuery'


function App() {
  const [location, setLocation] = useState('');
  const { data:  error, isError } = useWeatherQuery(location);

  const handleSearch = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <div className="app-wrapper min-h-screen flex items-center justify-center">
      <div className="app-container w-[90vw] h-[90vh] flex flex-col sm:flex-row">
        <div className="kitty-image w-full sm:w-[40%] flex items-center justify-center">
          <img src={kotekDeszcz} className="w-[90%] h-[90%] object-cover rounded-lg" alt="Kitty" />
        </div>
        <div className="weather-content w-full sm:w-[60%] flex flex-col items-center">
          <div className="w-full flex flex-col items-center mt-4">
            <SearchBar onSearch={handleSearch} />
            {isError && <div className="text-red-500">{error instanceof Error ? error.message : 'Wystąpił błąd'}</div>}
           <CurrentWeather location={location} />
            <Forecast location={location} />
          </div>
        </div>
      </div>
    </div>
  )

}export default App