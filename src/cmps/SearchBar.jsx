<<<<<<< HEAD
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
=======
import { useState, useEffect } from 'react'

export function SearchBar({ filterBy, setFilterBy }) {
    const [ filterToEdit, setFilterToEdit ] = useState(structuredClone(filterBy))

    useEffect(() => {
        setFilterBy(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'radio':
                value = field === 'sortDir' ? +ev.target.value : ev.target.value
                if(!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    function clearFilter() {
        setFilterToEdit({ ...filterToEdit, txt: ''})
    }
    
  

    return <section className="car-filter">
            <h3>Filter:</h3>
            <input
                type="text"
                name="txt"
                value={filterToEdit.txt}
                placeholder="Free text"
                onChange={handleChange}
                required
            />
            <button 
                className="btn-clear" 
                onClick={clearFilter}>Clear</button>


    </section>
}
>>>>>>> 975c58f89f999f64606fb53165bd25fe60892b6e
