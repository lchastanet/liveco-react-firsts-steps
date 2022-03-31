export default function TextFilter({ text, setText }) {
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <input
      type="text"
      className="search-input"
      placeholder="🔎 Type to search"
      onChange={handleChange}
      value={text}
    />
  )
}

// const filterByText = (e) => {
//   const textInput = e.target.value

//   const regex = new RegExp(textInput, "i")

//   const houseFiltered = houseToRent.filter(
//     (house) => house.name.search(regex) >= 0
//   )

//   setHouses(houseFiltered)
// }