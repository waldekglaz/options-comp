import { useState } from 'react'
import './App.css'
import { data } from './data'

function App() {
  const [cityData, setCityData] = useState(data)
  const [activeCity, setActiveCity] = useState(null)

  const handleChange = (e) => {
    const city = cityData.find((el) => el.name === e.target.value)
    setActiveCity(city)
    console.log(activeCity)
  }
  return (
    <div className="options">
      <select onChange={handleChange}>
        <option>Choose a city</option>
        {cityData.map((city) => (
          <option key={city.name}>{city.name}</option>
        ))}
      </select>
      {activeCity && (
        <div className="details-container">
          {activeCity.shops.map((shop) => (
            <div className="details" key={shop.name}>
              <p>Site name {shop.name}</p>
              <p>Site area {shop.area}</p>
              <p>Mobile {shop.mobile}</p>
              <p>City {activeCity.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
