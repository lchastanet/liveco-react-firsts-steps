export default function TypeFilter({ dropDown, setDropDown }) {
  const handleChange = (e) => {
    console.log(e)
    setDropDown(e.target.value)
  }

  return (
    <select onChange={handleChange} className="select" value={dropDown}>
      <option value="All">All</option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  )
}

// const filterByType = (e) => {
//   const houseType = e.target.value

//   const houseFiltered = houseToRent.filter(
//     (house) => house.type === houseType || houseType === "All"
//   )

//   setHouses(houseFiltered)
// }