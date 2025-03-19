import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { stationService } from "../services/station/station.service.local";
import { DataTable } from "../cmps/DataTable"

export function StationDetails() {
  const { id } = useParams();
  const [station, setStation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStation();
  }, [id]);

  async function loadStation() {
    try {
      setIsLoading(true);
      const stationFromService = await stationService.getById(id);
      if (!stationFromService) throw new Error("Station not found");
      setStation(stationFromService);
    } catch (err) {
      console.error("Failed to load station:", err);
      setError("Failed to load station data.");
    } finally {
      setIsLoading(false);
    }
  }

  /*
        <h5 style="font-weight:bold">{station.createdBy}</h5>
        <h5>{station.songs.length() + " songs"}</h5>
        <ul>
          {station.songs.map((song) => (
            <li key={song._id}>
              <strong>{song.title}</strong> - {song.addedBy || "Unknown"}
            </li>
          ))}
        </ul>

                  <h1>{station.createdBy} * {station.songs.length}</h1>
  */

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <section className="station-details">     
      <div className="grid-item-1 station-details-header">
        <div className="flexbox-item-1">
          <img  src={station.img} alt={station.img}></img>
        </div>
        <div className="flexbox-item-2">
          <h5>Playlist</h5>
          <h1>{station.title}</h1> 
          <h5>{station.createdBy.fullName} | {station.songs.length} songs</h5>
        </div>
        
      </div>

      <div className="grid-item-2">
      <div>
      <DataTable songs={station.songs} />
    </div>
      </div>
    </section>
  );
}
