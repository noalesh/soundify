import { userService } from '../services/user'
import { StationPreview } from './StationPreview'

export function StationList({ stations }) {
    
    //TODO: Add options to delete a station, create a new station ...?


    return <section>
        <ul className="list">
            {stations.map(station =>
                <li key={station._id}>
                    <StationPreview station={station}/>
                </li>)
            }
        </ul>
    </section>
}