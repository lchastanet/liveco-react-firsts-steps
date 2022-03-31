import "../styles/App.css"

import Header from "./Header"

import houseToRent from "../data/houseToRent.json"

function App() {
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
          <select className="select" name="home">
            <option value="All">All</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
          </select>
          <div>
            <label htmlFor="available">Show only Available </label>
            <input
              type="checkbox"
              className="available-checkbox"
              name="checkbox"
              id=""
            />
          </div>
        </div>
        <div className="cards"></div>
      </div>
    </div>
  )
}

export default App
