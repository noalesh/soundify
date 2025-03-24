import { Fragment } from "react"

export function DataTableRow({ song }) {

    return <Fragment>
            <tr className="table-row">
                <td></td>  {/* serial number of the song in the station */}
                <td> <div className="img-title-artist">
                <img src={song.imgUrl || song.imageUrl} alt="song image" width="4em" height="4em"/>                         
                <div><span className="song-title">{song.title}</span> 
                    <br></br> {song.artist}
                    </div>
                </div></td>
                <td>{song.album}</td>
                <td>{song.duration}</td>
            </tr>
        </Fragment>
}
