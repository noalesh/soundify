import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'


export function SongDetails() {

  const {songId} = useParams()
  const song = useSelector(storeState => storeState.songModule.song)

  useEffect(() => {
    loadSong(songId)
  }, [songId])



  return (
    <section className="song-details">
      <Link to="/song">Back to list</Link>
      <h1>Song Details</h1>
      {song && <div>
        <h3>{song.title}</h3>
        <pre> {JSON.stringify(song, null, 2)} </pre>
      </div>
      }
      

    </section>
  )
}