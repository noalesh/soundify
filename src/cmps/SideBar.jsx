import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../cmps/SearchBar";
import { MdLibraryMusic } from "react-icons/md";
import "@/assets/styles/cmps/SideBar.scss";
import { stationService } from "../services/station/station.service.local";

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
        <MdLibraryMusic className="library-icon" />
      </div>

      <div className="search-section">
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <div className="library-section">
        <h3>Your Library</h3>
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
