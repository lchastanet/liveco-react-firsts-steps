import "../styles/App.css";

import Header from "./Header";
import HouseCard from "./HouseCard";
import AvailabilityFilter from "./Filters/AvailabilityFilter";
import TypeFilter from "./Filters/TypeFilter";
import TextFilter from "./Filters/TextFilter";

import houseToRent from "../data/houseToRent.json";
import { useState } from "react";

function App() {
  // const [houses, setHouses] = useState(houseToRent)
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");
  const [dropDown, setDropDown] = useState("All");

  const resetFilters = () => {
    setChecked(false);
    setText("");
    setDropDown("All");

    // setHouses(houseToRent)
  };

  const houses = houseToRent.filter((house) => {
    let toKeep = true;

    if (text !== "")
      if (!house.name.toLowerCase().includes(text.toLowerCase()))
        toKeep = false;
    if (checked !== false)
      if (!house.available)
        toKeep = false;

    if(dropDown !== "All")
      if (house.type !== dropDown)
        toKeep = false;

    return toKeep
  });

  console.log(houses, checked, text, dropDown);
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="filters">
          <button onClick={resetFilters}>Reset Filters</button>
          <TextFilter text={text} setText={setText} />
          <TypeFilter dropDown={dropDown} setDropDown={setDropDown} />
          <AvailabilityFilter checked={checked} setChecked={setChecked} />
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
  );
}

export default App;
