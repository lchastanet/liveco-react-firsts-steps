import { useState } from "react"

export default function AvailabilityFilter({
  checked,
  setChecked,
}) {
  const filterByAvailability = (e) => {
    setChecked(e.target.checked)
  }

  //   console.log("filterByAvailability");

  //   const houseFiltered = houseToRent.filter((house) =>
  //     checked ? house.available === true : true
  //   )

  //   setHouses(houseFiltered)
  // }

  return (
    <div>
      <label htmlFor="available">Show only Available </label>
      <input
        type="checkbox"
        className="available-checkbox"
        name="checkbox"
        onChange={filterByAvailability}
        checked={checked}
      />
    </div>
  )
}
