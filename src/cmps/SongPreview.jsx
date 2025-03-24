


export function SongPreview({ song, onAdd}) {
 


    return (
        <section className='song-preview'>
            <img src={song.imageUrl} alt={song.title} />
            <div className='song-details'>
                <div className="song-name">{song.title}</div>
                <div className="song-artist">{song?.artists?.[0].name ?? 'Unknown Artist'}</div>
            </div>
            <button className='add-btn' onClick={() => onAdd(song)}>Add</button>
        </section>
    )
}