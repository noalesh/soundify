import { Player } from "./Player.jsx"
import { VolumeBar } from "./VolumeBar.jsx"
import { PlayerDev } from "./PlayerDev.jsx"


export function AppFooter(song) {


    return (
        <>
        <section className="app-footer">
            <img src="src/assets/imgs/imagenDragon.webp" />
            <h1>Radioactive</h1>
            <PlayerDev videoId={'ktvTqknDobU'} />
            <VolumeBar />

        </section>
        </>
    )
}