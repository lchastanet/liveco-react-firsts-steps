function TextFilter({ setSearch }) {
  const filterByText = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="🔎 Type to search"
      onChange={filterByText}
    />
  );
}

export default TextFilter;
