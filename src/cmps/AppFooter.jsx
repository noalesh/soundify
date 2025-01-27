import { Player } from "./Player.jsx"
import { VolumeBar } from "./VolumeBar.jsx"
import { PlayerDev } from "./PlayerDev.jsx"

export function AppFooter(song) {


    return (
        <>
        <section className="app-footer">
            <img src="src/assets/imgs/SongDemoPic.png" />
            <h1>No Role Modelz</h1>
            <PlayerDev />
            <VolumeBar />

        </section>
        </>
    )
}