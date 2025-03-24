import { Link } from 'react-router-dom'



export function SongPreview({ song }) {
    return (
        <section className='song-preview'>
            <img src={song.imageUrl} alt={song.title} />
            <div className='song-details'>
                <div className="song-name">{song.title}</div>
                <div className="song-artist">{song?.artists?.[0].name ?? 'Unknown Artist'}</div>
            </div>
            <button className='add-btn'>Add</button>
        </section>
    )
}