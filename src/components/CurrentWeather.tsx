import { TiWeatherSunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf, FaWind } from "react-icons/fa";

const CurrentWeather: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Warszawa</h1>
      <TiWeatherSunny size={50} className="mt-2" />
      <h1 className="mt-2">15°C</h1>
      <div className="mt-10 flex w-full justify-around">
        <div className="flex flex-col items-center">
          <WiHumidity size={50} />
          <h1>70%</h1>
        </div>
        <div className="flex flex-col items-center">
          <FaThermometerHalf size={50} />
          <h1>15°C</h1>
        </div>
        <div className="flex flex-col items-center">
          <FaWind size={50} />
          <h1>50km/h</h1>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;