import { useState } from "react"

export default function AvailabilityFilter({
  houseToRent,
  setHouses,
  checked,
  setChecked,
}) {
  const filterByAvailability = () => {
    setChecked(!checked)

    const houseFiltered = houseToRent.filter((house) =>
      !checked ? house.available === !checked : true
    )

    setHouses(houseFiltered)
  }

  return (
    <div>
      <label htmlFor="available">Show only Available </label>
      <input
        type="checkbox"
        className="available-checkbox"
        name="checkbox"
        onChange={filterByAvailability}
      />
    </div>
  )
}
