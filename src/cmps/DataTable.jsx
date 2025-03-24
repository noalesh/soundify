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
                <th><img src="/src/assets/imgs/Soundify-files/Duration.svg" alt="Duration"/></th>
            </tr>
        </thead>
        <tbody>
            {songs.map(song =>
                <DataTableRow className="table-row" key={song._id} song={song}/>)}
        </tbody>
    </table>
}
