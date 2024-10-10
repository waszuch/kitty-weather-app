import './style.css'
import kotekDeszcz from './assets/kotek-deszcz.png'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'

function App() {
  return (
    <div className="app-wrapper min-h-screen flex items-center justify-center">
      <div className="app-container w-[90vw] h-[90vh] flex flex-col sm:flex-row">
        <div className="kitty-image w-full sm:w-[40%] flex items-center justify-center">
          <img src={kotekDeszcz} className="w-[90%] h-[90%] object-cover rounded-lg" alt="Kitty" />
        </div>
        <div className="weather-content w-full sm:w-[60%] flex flex-col items-center">
          <div className="w-full flex flex-col items-center mt-4">
            <SearchBar />
            <CurrentWeather />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App