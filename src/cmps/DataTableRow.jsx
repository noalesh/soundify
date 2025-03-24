import { Fragment } from "react"
import { useDispatch } from "react-redux"
import { SET_SONG } from "../store/reducers/song.reducer"

export function DataTableRow({ song }) {
    
    
    const dispatch = useDispatch()

    function onSelectSong() {
        dispatch({ type: SET_SONG, song })
    }

    

    return <Fragment>
            <tr className="table-row" onClick={onSelectSong}>
                <td></td>  {/* serial number of the song in the station */}
                <td> 
                    <div className="img-title-artist">
                        <img src={song.imgUrl || song.imageUrl} alt="song image" width="4em" height="4em"/>                         
                        {/* <div> */}
                            <span className="song-title">{song.title}</span> 
                            <span >{song.artist}</span> 
                            {/* <br></br> {song.artist} */}
                        {/* </div> */}
                    </div>
                </td>
                <td>{song.album}</td>
                <td>{song.duration}</td>
            </tr>
        </Fragment>
}
