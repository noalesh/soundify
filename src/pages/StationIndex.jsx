import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service";
import { stationService } from "../services/station";
import { userService } from "../services/user";

import { loadStations, removeStation } from '../store/actions/station.actions.js'
import { StationList } from "../cmps/StationList";
import { SideBar } from "../cmps/SideBar";
import { AppHeader } from "../cmps/AppHeader";
import { AppFooter } from "../cmps/AppFooter";

export function StationIndex() {

  const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter());
  const stations = useSelector(
    (storeState) => storeState.stationModule.stations
  );

  useEffect(() => {
    loadStations(filterBy);
  }, [filterBy]);

  
  async function onRemoveStation(stationId) {
    try {
      await stationService.remove(stationId);
      showSuccessMsg("Station removed");
      loadStations(filterBy);
    } catch (err) {
      showErrorMsg("Cannot remove station");
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


/*
{userService.getLoggedinUser() && (
          <button onClick={onAddStation}>New Station</button>
        )}
*/

  return (
    <main className="station-index">
      <div class="grid-container">
        <div class="grid-item-1"><AppHeader /></div>
        <div class="grid-item-2"><SideBar /></div>
        <div class="grid-item-3"><StationList stations={stations} /></div>
        <div class="grid-item-4"><AppFooter /></div>
      </div>
    </main>
  );
}

