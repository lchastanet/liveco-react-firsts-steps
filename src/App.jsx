import { useState } from "react";

import houseToRent from "./data/houseToRent.json";

import "./styles/App.css";

import Header from "./components/Header";
import HouseCard from "./components/HouseCard";
import AvailabilityFilter from "./components/Filters/AvailabilityFilter";
import TypeFilter from "./components/Filters/TypeFilter";
import TextFilter from "./components/Filters/TextFilter";

function App() {
  const [availabilty, setAvailability] = useState(false);
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <div>
        <div className="filters">
          <TextFilter setSearch={setSearch} />
          <TypeFilter setType={setType} />
          <AvailabilityFilter setAvailability={setAvailability} />
        </div>
        <div className="cards">
          {houseToRent
            .filter((house) =>
              availabilty ? house.available === availabilty : true
            )
            .filter((house) => (type !== "All" ? house.type === type : true))
            .filter((house) => house.name.search(new RegExp(search, "i")) >= 0)
            .map(({ name, desc, img }, index) => (
              <HouseCard
                key={`${name}_${index}`}
                name={name}
                desc={desc}
                img={img}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
