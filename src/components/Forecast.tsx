import React from 'react'

const Forecast: React.FC = () => {
  const data = [1, 2, 3, 4, 5]
  return (
    <div>
      <div className="mt-8 flex items-center ml-2">
        <p className="font-medium uppercase">5 DAYS FORECAST</p>
      </div>
      <hr className="my-1" />
      <div className="flex justify-between">
        {data.map((_, index) => (
          <div key={index} className="flex flex-col items-center mx-4">
            <p className="font-medium">Wed</p>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast