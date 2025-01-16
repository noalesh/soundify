import { Player } from "./Player.jsx"
import { VolumeBar } from "./VolumeBar.jsx"

export function AppFooter(song) {


    return (
        <>
        <section className="app-footer">
            <img src="src/assets/imgs/SongDemoPic.png" />
            <h1>No Role Modelz</h1>
            <Player />
            <VolumeBar />

        </section>
        </>
    )
}