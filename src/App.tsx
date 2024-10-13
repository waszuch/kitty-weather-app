import './style.css'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import { useState } from 'react'
import { useWeatherQuery } from './services/useWeatherQuery'
import skyBackground from './assets/blue-sky-background-and-white-clouds-vector.jpg';
import { useCatImage } from './services/catImage';


function App() {
  const [location, setLocation] = useState('');
  const { data:  error, isError } = useWeatherQuery(location);
  const catImage = useCatImage(location);

  const handleSearch = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <div className="app-wrapper min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${skyBackground})` }}>
      <div className="app-container w-[90vw] min-h-[90vh] flex flex-col sm:flex-row border-solid rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <div className="kitty-image w-full sm:w-[40%] flex items-center justify-center">
          <img src={catImage} className="w-[90%] h-[90%] object-cover rounded-lg" alt="Kitty" />
        </div>
        <div className="weather-content w-full sm:w-[60%] flex flex-col items-center overflow-y-auto">
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


