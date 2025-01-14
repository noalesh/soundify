import { useState } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { SearchBar } from "../cmps/SearchBar";

export function SideBar() {

  const [filterBy, setFilterBy] = useState("");

  

  return (
    <header className="side-bar">
        <h1>This is the side bar - UNDER CONSTRUCTION...</h1>
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
    </header>
  )
}
