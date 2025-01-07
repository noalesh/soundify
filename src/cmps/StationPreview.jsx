import { Link } from 'react-router-dom'
//TODO: Verify the path of the station.
export function StationPreview({ station }) {
    return <article className="preview">
        <header>
            <Link to={`/station/${station._id}`}>{station.name}</Link>
        </header>

        
        
        
    </article>
}