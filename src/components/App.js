import "../styles/App.css"

import Header from "./Header"
import HouseCard from "./HouseCard"
import AvailabilityFilter from "./Filters/AvailabilityFilter"
import TypeFilter from "./Filters/TypeFilter"
import TextFilter from "./Filters/TextFilter"

import houseToRent from "../data/houseToRent.json"
import { useState } from "react"

function App() {
  const [houses, setHouses] = useState(houseToRent)
  const [checked, setChecked] = useState(false)

  const resetFilters = () => {
    setHouses(houseToRent)
    setChecked(false)
  }

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="filters">
          <button onClick={resetFilters}>Reset Filters</button>
          <TextFilter houseToRent={houses} setHouses={setHouses} />
          <TypeFilter houseToRent={houses} setHouses={setHouses} />
          <AvailabilityFilter
            houseToRent={houses}
            setHouses={setHouses}
            checked={checked}
            setChecked={setChecked}
          />
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
