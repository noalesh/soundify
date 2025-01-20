import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { stationService } from "../services/station/station.service.local";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="station-details">
      <h1>This is the station details:</h1>
      <h1>{station.title}</h1>
      <ul>
        {station.songs.map((song) => (
          <li key={song._id}>
            <strong>{song.title}</strong> - {song.addedBy || "Unknown"}
          </li>
        ))}
      </ul>
    </section>
  );
}
