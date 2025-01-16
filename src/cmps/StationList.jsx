import { userService } from '../services/user'
import { StationPreview } from './StationPreview'

export function StationList({ stations }) {
    
    //TODO: Add options to delete a station, create a new station ...?

    <h1>StationList: </h1>

    return <section>
        <h1>This is the stations list:</h1>
        <ul className="list">
            {stations.map(station =>
                <li key={station._id}>
                    <StationPreview station={station}/>
                </li>)
            }
        </ul>
    </section>
}