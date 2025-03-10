import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import { StationList } from "../cmps/StationList"
import { stationService } from "../services/station/station.service.local";
import { useOutletContext } from "react-router-dom"

export function HomePage() {
    const [stations, setStations] = useState([]);
    
    const context = useOutletContext();

    async function loadStations() {

        try {
           // console.log("calling from HomePage")
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
        <div>
        <section>
            <h6 className="dev-comments">TODO - UNDER CONSTRUCTION... <br></br>HomePage</h6>

            <h3>Your Playlists</h3>
            <StationList stations={stations}/>
        </section >

         <section>
            <Outlet />
        </section>
        </div>
    )
}

