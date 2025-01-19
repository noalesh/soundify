import { Link } from 'react-router-dom'
import { SongList } from './SongList'

//TODO: Verify the path of the station.

export function StationPreview({ station }) {

    // TODO - replace with real code /////////
    const songs = []
    function onRemoveSong() {}
    function onAddSong() {}
    /// END OF TODO /////////////////////////////////////

    return <article className="station-preview">
        <header>
            <Link to={`/station/${station._id}`}>{station.name}</Link>
            <div className="station-preview-container">
                <h3>{station.imgUrl}</h3>
                <img src={station.img} alt="playlist image" width="90" height="90"/> 
                <h4>{station.title}</h4>
                <SongList
                    songs={songs}
                    onRemoveSong={onRemoveSong} 
                    onAddSong={onAddSong}/>
                </div>
        </header>

        
        
        
    </article>
}