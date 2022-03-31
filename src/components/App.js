import "../styles/App.css"

import Header from "./Header"
import HouseCard from "./HouseCard"
import AvailabilityFilter from "./AvailabilityFilter"
import TypeFilter from "./TypeFilter"

import houseToRent from "../data/houseToRent.json"
import { useState } from "react"

function App() {
  const [houses, setHouses] = useState(houseToRent)

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="filters">
          <input
            type="text"
            className="search-input"
            placeholder="🔎 Type to search"
          />
          <TypeFilter houseToRent={houseToRent} setHouses={setHouses} />
          <AvailabilityFilter houseToRent={houseToRent} setHouses={setHouses} />
        </div>
        <div className="cards">
          {houses.map(({ name, desc, img }, index) => (
            <HouseCard
              key={`${name}_${index}`}
              name={name}
              desc={desc}
              img={img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
