import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { stationService } from "../services/station";
import { userService } from "../services/user";

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

  async function loadStations(filterBy) {
    try {
      await stationService.query(filterBy);
    } catch (err) {
      console.error("Cannot load stations", err);
    }
  }

  async function onAddStation() {
    try {
      const station = { name: "New Station", songs: [] };
      await stationService.save(station);
      loadStations(filterBy);
    } catch (err) {
      console.error("Cannot add station", err);
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
      <AppHeader /> 
      <SideBar />
      <StationList stations={stations} />
      <AppFooter />

    </main>
  );
}

