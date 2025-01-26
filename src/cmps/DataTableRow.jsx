import { Fragment } from "react"

export function DataTableRow({ song }) {

    return <Fragment>
            <tr>
                <td></td>  {/* serial number of the song in the station */}
                <td><span className="song-title">{song.title}</span> 
                    <br></br> {song.artist}</td>
                <td>{song.album}</td>
                <td>{song.duration}</td>
            </tr>
        </Fragment>
}
