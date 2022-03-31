export default function TypeFilter({ houseToRent, setHouses }) {
  const filterByType = (e) => {
    const houseType = e.target.value

    const houseFiltered = houseToRent.filter(
      (house) => house.type === houseType || houseType === "All"
    )

    setHouses(houseFiltered)
  }

  return (
    <select onChange={filterByType} className="select" name="home">
      <option value="All">All</option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  )
}
