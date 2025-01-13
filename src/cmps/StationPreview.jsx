import { Link } from 'react-router-dom'
import { SongList } from './SongList'

//TODO: Verify the path of the station.

export function StationPreview({ station }) {

    // TODO - replace with real code /////////
    const songs = []
    function onRemoveSong() {}
    function onAddSong() {}
    /// END OF TODO /////////////////////////////////////

    return <article className="preview">
        <header>
            <Link to={`/station/${station._id}`}>{station.name}</Link>
            <SongList
                songs={songs}
                onRemoveSong={onRemoveSong} 
                onAddSong={onAddSong}/>
        </header>

        
        
        
    </article>
}