import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBar } from "../cmps/SearchBar";
import { stationService } from "../services/station/station.service.local";
import { storageService } from "../services/async-storage.service";
import { MdAdd, MdArrowForwardIos } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
import { IconsSvg } from "../cmps/IconsSvg";
import { addStation } from "../store/actions/station.actions";

export function SideBar() {
  const [filterBy, setFilterBy] = useState("");
  const [stations, setStations] = useState([]);
  const navigate = useNavigate()

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

  const filteredStations = stations.filter((station) =>
    station.title
      .toLowerCase()
      .includes((typeof filterBy === "string" ? filterBy : "").toLowerCase())
  );

  async function onCreateStation(){
    const newStation =stationService.getEmptyStation()
    const addedStation = await addStation(newStation)
   navigate(`/station/${addedStation._id}`)
  }

  return (
    <aside className="side-bar">
      <div className="logo-section">
        <NavLink
          className="library-title bright-hover"
          onClick={() => {
              // TODO - clicking 'Your Library' should collapse the side bar.
          } }
        >
          <IconsSvg svgName="library" />
          Your Library
        </NavLink>
        <div className="actions">
          {/* <NavLink to={`/station/add`} className="plus-create-btn">
            <MdAdd size={16} />
            <span>Create</span>
          </NavLink> */}
          <div onClick={onCreateStation} className="plus-create-btn">
            <MdAdd size={16} />
            <span>Create</span>
          </div>
          <button
            className="expand-btn"
            type="button"
            aria-label="Expand Sidebar"
          >
            <MdArrowForwardIos size={16} />
          </button>
        </div>
      </div>

      <div className="search-section">
        <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <div className="recents-section">
        <span>Recents</span>
        <RiListSettingsLine size={20} className="recents-icon" />
      </div>

      <div className="library-section">
        <ul>
          {filteredStations.map((station) => (
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
