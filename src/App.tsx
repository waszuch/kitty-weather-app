import './style.css'
import kotekDeszcz from './assets/kotek-deszcz.png'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'

function App() {
  return (
    <div className="app-wrapper min-h-screen flex items-center justify-center">
      <div className="app-container w-[90vw] h-[90vh] border border-black rounded-lg flex flex-col sm:flex-row">
        <div className="kitty-image w-full h-[40%] sm:w-[40%] sm:h-full flex items-center justify-center">
          <img src={kotekDeszcz} className="w-[90%] h-[90%] object-cover rounded-lg" />
        </div>
        <div className="weather-content w-full h-[60%] sm:w-[60%] sm:h-full flex flex-col items-start justify-start">
          <div className="top w-full flex flex-col items-center mt-4">
            <div className="w-full h-[10%] sm:h-auto justify-center flex items-center">
              <SearchBar />
            </div>
            <div className="mt-4" />
            <div className="w-full h-[25%] sm:h-auto">
              <CurrentWeather />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App