import { userService } from '../services/user'
import { StationPreview } from './StationPreview'
import { Link } from "react-router-dom";


export function StationList({ stations }) {
    
    //TODO: Add options to delete a station, create a new station ...?

    return <section>
       {/* <h1>Your shows</h1>  */}
       {console.log(stations)}
       <ul className="station-list">
            {stations.map(station =>
                <Link className="station-list-item-container" to={`/station/${station._id}`}>{station.name}
                    <li key={station._id} >
                        <StationPreview station={station}/>
                    </li>
                </Link>)
            }
        </ul>  

        
    </section>
}