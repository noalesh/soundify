import { DataTableRow } from "./DataTableRow.jsx"
import { stationService } from "../services/station/station.service.local.js"
import { useParams } from "react-router-dom";

export function DataTable({ songs }) {


    function removeSong () {

    }
    return <table className="data-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                {/* <th><img src="/src/assets/imgs/Soundify-files/Duration.svg" alt="Duration"/></th> */}
                <th>
                <svg data-encore-id="icon" fill="#b3b3b3" role="img" aria-hidden="true" className="e-9640-icon" viewBox="0 0 16 16"  ><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>
                </th>
            </tr>
        </thead>
        <tbody>
            {songs.map(song =>
                <DataTableRow className="table-row" key={song._id} song={song}/>)}
        </tbody>
    </table>
}
