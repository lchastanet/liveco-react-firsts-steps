function TypeFilter({ setType }) {
  const filterByType = (e) => {
    setType(e.target.value);
  };

  return (
    <select onChange={filterByType} className="select" name="home">
      <option value="All">All</option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  );
}

export default TypeFilter;
