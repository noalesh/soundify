import { DataTableRow } from "./DataTableRow.jsx"

export function DataTable({ songs }) {
    return <table className="data-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            {songs.map(song =>
                <DataTableRow key={song._id} song={song}/>)}
        </tbody>
    </table>
}
