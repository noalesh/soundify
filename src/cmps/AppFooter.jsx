import { Player } from "./Player.jsx"
import { VolumeBar } from "./VolumeBar.jsx"

export function AppFooter(song) {


    return (
        <>
        <section className="app-footer">
            <img src="" />
            <h1>Song Title</h1>
            <Player />
            <VolumeBar />

        </section>
        </>
    )
}