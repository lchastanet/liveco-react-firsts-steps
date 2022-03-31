export default function TextFilter({ houseToRent, setHouses }) {
  const filterByText = (e) => {
    const textInput = e.target.value

    const regex = new RegExp(textInput, "i")

    const houseFiltered = houseToRent.filter(
      (house) => house.name.search(regex) >= 0
    )

    setHouses(houseFiltered)
  }
  return (
    <input
      type="text"
      className="search-input"
      placeholder="🔎 Type to search"
      onChange={filterByText}
    />
  )
}
