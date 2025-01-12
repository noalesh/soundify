import { useState, useEffect } from "react";

export function SearchBar({ filterBy, setFilterBy }) {
  // State for managing the filter being edited
  const [filterToEdit, setFilterToEdit] = useState({ ...filterBy });

  // Update the parent filter whenever filterToEdit changes
  useEffect(() => {
    setFilterBy(filterToEdit);
  }, [filterToEdit]);

  // Handle input changes dynamically
  function handleChange(ev) {
    const { name, value, type } = ev.target;
    let newValue = value;

    switch (type) {
      case "number":
        newValue = +value || "";
        break;
      case "radio":
        newValue = +value;
        break;
    }

    setFilterToEdit({ ...filterToEdit, [name]: newValue });
  }

  // Clear the filter input
  function clearFilter() {
    setFilterToEdit({ ...filterToEdit, txt: "", sortDir: "" });
  }

  return (
    <section className="search-bar">
      {/* Search input */}
      <input
        type="text"
        name="txt"
        value={filterToEdit.txt || ""}
        placeholder="Search songs or stations..."
        onChange={handleChange}
      />
      {/* Clear button */}
      <button className="btn-clear" onClick={clearFilter}>
        Clear
      </button>
    </section>
  );
}
