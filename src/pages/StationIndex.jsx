import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service";
import { stationService } from "../services/station";
import { userService } from "../services/user";

import { loadStations, removeStation } from '../store/actions/station.actions.js'
// TODO: removeStation and addStation should be in a DropDown menu. 
import { SET_FILTER_BY } from '../store/reducers/station.reducer.js'

import { StationList } from '../cmps/StationList'
import { SearchBar } from '../cmps/SearchBar'


//TODO: Manage the service to search by song or station 
export function StationIndex() {
  const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter());
 // const [filteredStations, setFilteredStations] = useState([]);
  const stations = useSelector(
    (storeState) => storeState.stationModule.stations
  );

  useEffect(() => {
    loadStations(filterBy);
  }, [filterBy]);

  async function loadStations(filterBy) {
    try {
      const stations = await stationService.query(filterBy);
      setFilteredStations(stations);
    } catch (err) {
      showErrorMsg("Cannot load stations");
    }
  }

  async function onRemoveStation(stationId) {
    try {
      await stationService.remove(stationId);
      showSuccessMsg("Station removed");
      loadStations(filterBy);
    } catch (err) {
      showErrorMsg("Cannot remove station");
    }
  }

  async function onRemoveSong(songId) {
    try {
      await stationService.removeSong(songId);
      showSuccessMsg("Song removed");
      loadStations(filterBy);
    } catch (err) {
      showErrorMsg("Cannot remove song");
    }
  }

  async function onAddStation() {
    try {
      const station = { name: "New Station", songs: [] }; 
      const savedStation = await stationService.save(station);
      showSuccessMsg(`Station added (id: ${savedStation._id})`);
      loadStations(filterBy);
    } catch (err) {
      showErrorMsg("Cannot add station");
    }
  }

  return (
    <main className="station-index">
      <header>
        <h2>Stations</h2>
        {userService.getLoggedinUser() && (
          <button onClick={onAddStation}>New Station</button>
        )}
      </header>

      {/* Search bar for filtering stations */}
      <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />

     {/* <section>
        {filteredStations.length ? (
          filteredStations.map((station) => (
            <div key={station._id}>
              <h3>{station.name}</h3>
              <SongList songs={station.songs} onRemoveSong={onRemoveSong} />
            </div>
          ))
        ) : (
          <p>No stations to display</p>
        )}
      </section>  */} 


      <StationList stations={stations}></StationList>

    </main>
  );
}
