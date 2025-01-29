import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../cmps/SearchBar";
import { stationService } from "../services/station/station.service.local";
import { storageService } from "../services/async-storage.service";

export function SideBar() {
  const [filterBy, setFilterBy] = useState("");
  const [stations, setStations] = useState([]);

  useEffect(() => {
    loadStations();
  }, []);

  async function loadStations() {
    try {
      const stationsFromService = await stationService.query();
      setStations(stationsFromService);
    } catch (err) {
      console.error("Failed to load stations:", err);
    }
  }

  return (
    <aside className="side-bar">
      <div className="logo-section">
        <NavLink
          className="library-title bright-hover"
          onClick={() =>
            prompt(
              "TODO - development note - clicking 'Your Library' should collapse the side bar."
            )
          }
        >
          <img
            className="library-icon"
            src="/src/assets/imgs/Soundify-files/libraryIcon.svg"
            alt="library icon"
          />
          Your Library
        </NavLink>
        {/* TODO - the 'Your Library" link should cause the side bar to collapse.  */}
        <NavLink to={`/newStation`}>
          <img
            className="plus-sign bright-hover"
            src="/src/assets/imgs/Soundify-files/plusSign.svg"
            alt="plus sign"
          />
          {/* TODO - for now, the + sign redirects automatically to the StationEdit page to
        allow a new station to be created, but clicking the + icon should open a dropdown menu
         that allows the user to choose between adding a new station or folder.*/}
        </NavLink>
      </div>

      <div className="search-section">
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <div className="library-section">
        <ul>
          {stations.map((station) => (
            <li key={station._id}>
              <NavLink
                to={`/station/${station._id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {station.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
