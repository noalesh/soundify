import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../cmps/SearchBar";

export function SideBar({
  stations,
  onAddStation,
  onUpdateStation,
  onDeleteStation,
}) {
  const [filterBy, setFilterBy] = useState("");

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
        <button className="add-station-btn" onClick={onAddStation}>
          + Add Playlist
        </button>
      </div>

      <div className="search-section">
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <div className="library-section">
        <ul>
          {stations.map((station) => (
            <li key={station._id} className="station-item">
              <NavLink
                to={`/station/${station._id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {station.title}
              </NavLink>
              <div className="station-actions">
                <button onClick={() => onUpdateStation(station._id)}>
                  Edit
                </button>
                <button onClick={() => onDeleteStation(station._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
