<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service";
import { stationService } from "../services/station";
import { userService } from "../services/user";

import { SongList } from "../cmps/SongList";
import { SearchBar } from "../cmps/SearchBar";

export function StationIndex() {
  const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter());
  const [filteredStations, setFilteredStations] = useState([]);
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

      <section>
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
      </section>
    </main>
  );
}
=======
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { stationService } from '../services/station'
import { userService } from '../services/user'

import { SongList } from '../cmps/SongList'
import { SearchBar } from '../cmps/SearchBar'
//TODO: Manage the service to search by song or station 
export function StationIndex() {

    const [ filterBy, setFilterBy ] = useState(stationService.getDefaultFilter())
    const stations = useSelector(storeState => storeState.stationModule.stations)

    useEffect(() => {
        loadStation(filterBy)
    }, [filterBy])

    async function onRemoveStation(stationId) {
        try {
            await removeStation(stationId)
            showSuccessMsg('Station removed')            
        } catch (err) {
            showErrorMsg('Cannot remove Station')
        }
    }

    async function onRemoveSong(songId) {
        try {
            await removeSong(songId)
            showSuccessMsg('Song removed')            
        } catch (err) {
            showErrorMsg('Cannot remove Song')
        }
    }

    async function onAddSong() {
        //TODO: Adding the option to add songs to the station 
        try {
            const savedSong = await addSong(song)
            showSuccessMsg(`Song added (id: ${savedSong._id})`)
        } catch (err) {
            showErrorMsg('Cannot add song')
        }        
    }
    async function onAddStation() {
        //TODO: Adding the option to add station 
        try {
            const savedStation = await addStation(station)
            showSuccessMsg(`STation added (id: ${savedStation._id})`)
        } catch (err) {
            showErrorMsg('Cannot add Station')
        }        
    }


    async function onEditStationDetails(station) {
        //TODO: adding the functionality of editing station details
        try {
            const savedStation = await updateCar(stationToSave)
            showSuccessMsg(`Station updated`)
        } catch (err) {
            showErrorMsg('Cannot update Station')
        }        
    }

    return (
        <main className="station-index">
            <header>
                <h2>Stations</h2>
                {userService.getLoggedinUser() && <button onClick={onAddStation}>New Station</button>}
            </header>
            <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
            <SongList
                songs={songs}
                onRemoveSong={onRemoveSong} 
                onAddSong={onAddSong}/>
        </main>
    )
}
>>>>>>> 975c58f89f999f64606fb53165bd25fe60892b6e
