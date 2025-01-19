import { userService } from '../services/user'
import { StationPreview } from './StationPreview'
import { Link } from "react-router-dom";
                     

export function StationList({ stations }) {
    
    //TODO: Add options to delete a station, create a new station ...?

    return <section>
        <h1>Your shows</h1>
        <div className="dev-comments">Development note - TODO - currently all stations of all users are being shown!</div>
        <ul className="station-list">
            {stations.map(station =>
                <a class="station-list-item-container" href={`/show/${station._id}`}>
                    <li key={station._id}>
                    <StationPreview station={station}/>
                    </li>
                </a>)
            }
        </ul>
    </section>
}