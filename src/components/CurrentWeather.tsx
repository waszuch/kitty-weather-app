import { TiWeatherSunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf } from "react-icons/fa";
import { FaWind } from "react-icons/fa";

const CurrentWeather: React.FC = () => {
  return (
    <div className="w-[85%] flex flex-col items-center justify-center">
      <h1>Warszawa</h1>
      <TiWeatherSunny size={50} className="mt-2" />
      <h1 className="mt-2">15°C</h1>
      <div className="mt-10 flex items-center justify-center w-full">
        <div className="flex-1 flex flex-col items-center justify-center">
          <WiHumidity size={50} />
          <h1>70%</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <FaThermometerHalf size={50} />
          <h1>15°C</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
            <FaWind size={50} />
            <h1>50km/h</h1>
      </div>
    </div>
    </div>
  );
};

export default CurrentWeather;