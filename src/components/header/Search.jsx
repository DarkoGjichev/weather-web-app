import { useState } from "react";

function Search({ setCity }) {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        name="city"
        id="city"
        placeholder="Search for a city"
        value={value}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Search;
