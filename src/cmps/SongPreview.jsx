import { Link } from 'react-router-dom'

export function SongPreview({ song }) {
    return <article className="preview">
        <header>
            <Link to={`/song/${song._id}`}>{song.title}</Link>
        </header>

        
        {song.artist && <p>Artist: <span>{song.artist.fullname}</span></p>}
        
    </article>
}