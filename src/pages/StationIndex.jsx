import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service";
import { stationService } from "../services/station";
import { userService } from "../services/user";

import {
  loadStations,
  removeStation,
} from "../store/actions/station.actions.js";
import { StationList } from "../cmps/StationList";
import { SideBar } from "../cmps/SideBar";
import { AppHeader } from "../cmps/AppHeader";
import { AppFooter } from "../cmps/AppFooter";
import { Outlet } from "react-router";

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

  async function onUpdateStation(stationId) {
    try {
      const station = stations.find((s) => s._id === stationId);
      if (!station) throw new Error("Station not found");
      station.name =
        prompt("Enter new name for the station", station.name) || station.name;
      const updatedStation = await stationService.save(station);
      showSuccessMsg(`Station updated (id: ${updatedStation._id})`);
      loadStations(filterBy);
    } catch (err) {
      showErrorMsg("Cannot update station");
    }
  }

  return (
    <main className="station-index">
      <div className="grid-container">
        <div className="grid-item-1">
          <AppHeader />
        </div>
        <div className="grid-item-2">
          <SideBar
            stations={stations}
            onAddStation={onAddStation}
            onUpdateStation={onUpdateStation}
            onDeleteStation={onRemoveStation}
          />
        </div>
        <div className="grid-item-3">
          <Outlet />
        </div>
        <div className="grid-item-4">
          <AppFooter />
        </div>
      </div>
    </main>
  );
}
