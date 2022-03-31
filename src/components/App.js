import "../styles/App.css"

import Header from "./Header"

import houseToRent from "../data/houseToRent"

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
        <div className="cards">
          {/*
    <div class="card">
       <div class="card-header">
          <div class="card-img" style="background-image:url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80') "></div>
        </div>
      <div class="card-body">
        <h2 class="card-title">Sample Card</h2>
        <p class="card-description">This is just a sample card, take the structure of this card as an example for the function createCard</p>
      <button class="card-button">I want it!</button>
      </div>
    </div>
      </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
