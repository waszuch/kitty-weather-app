import './style.css'
import kotekDeszcz from './assets/kotek-deszcz.png'
import SearchBar from './components/SearchBar'


function App() {
  return (
    <div className="app-wrapper min-h-screen flex items-center justify-center">
      <div className="app-container w-[90vw] h-[80vh] border border-black rounded-lg flex">
        <div className="kitty-image w-[40%] h-full flex items-center justify-center">
          <img src={kotekDeszcz} className="w-[90%] h-[90%] object-cover rounded-lg" />
        </div>
        <div className="weather-content w-[60%] h-full flex items-start justify-center">
          <div className="top w-full flex justify-center mt-4"> 
          <SearchBar />
          
          </div>
        </div>
      </div>
    </div>
  
  )}

export default App

