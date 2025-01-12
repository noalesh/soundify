import { userService } from '../services/user'
import { SongPreview } from './SongPreview'
//TODO: Fix the function onRemoveSong - Distinguish between user created playlist to app suggestion

export function SongList({ songs, onRemoveSong, onAddSong }) {//TODO: Add the option to add song to a playlist 
    
    function shouldShowActionBtns(song) {
        const user = userService.getLoggedinUser()
        
        if (!user) return false
        if (user.isAdmin) return true
        return song.owner?._id === user._id
    }

    return <section>
        <ul className="list">
            {songs.map(song =>
                <li key={song._id}>
                    <SongPreview song={song}/>
                    {shouldShowActionBtns(song) && <div className="actions">
                        <button onClick={() => onRemoveSong(song._id)}>x</button>
                        <button onClick={() => onAddSong(song._id)}>+</button>
                    </div>}
                </li>)
            }
        </ul>
    </section>
}