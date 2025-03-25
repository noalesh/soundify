import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import { StationList } from "../cmps/StationList"
import { stationService } from "../services/station/station.service.local";
import { useOutletContext } from "react-router-dom"
import { SongList } from "../cmps/SongList";

export function HomePage() {


    const songs = [
        {
            "_id": "P7Q8R9",
            "title": "Best Time",
            "artists": [{ "name": "Brent Faiyaz", "spotifyId": "3tlXnStJ1fFhdScmQeLpuG" }],
            "imageUrl": "https://i.scdn.co/image/ab67616d0000b273180c0d19e7dedffa7f7cb4b9",
            "videoId": "SF8wxV4mbIg",
            "album": "Best Time",
            "duration": "03:21"
          },
          {
            "_id": "S1T2U3",
            "title": "Surround Sound (feat. 21 Savage & Baby Tate)",
            "artists": [
              { "name": "JID", "spotifyId": "6U3ybJ9UHNKEdsH7ktGBZ7" },
              { "name": "21 Savage", "spotifyId": "1URnnhqYAYcrqrcwql10ft" },
              { "name": "Baby Tate", "spotifyId": "3IJ21966TwNZI24MwZHMu4" }
            ],
            "imageUrl": "https://i.scdn.co/image/ab67616d0000b273cae6e44dcc84e2035c3ad092",
            "videoId": "Y19q-7VN2WI",
            "album": "Surround Sound (feat. 21 Savage & Baby Tate)",
            "duration": "04:05"
          }
    ]
    const [stations, setStations] = useState([]);
    
    const {filterBy} = useOutletContext();

    async function loadStations() {

        try {
           // TODO - continue from here to connect the filter
         //   const stationsToSet = await stationService.query(context.filterBy);
           const stationsToSet = await stationService.query(); 
           setStations(stationsToSet);
        } catch (err) {
            console.error("Failed to load stations:", err);
            }
        }
    
    useEffect(() => {
        loadStations();
    }, []);
    
    return (
        <div className="homepage">
        <section>
            <h3>Your Playlists</h3>
            <StationList stations={stations}/>
        </section >
        
         <section>
            <Outlet />
        </section>
        </div>
    )
}

