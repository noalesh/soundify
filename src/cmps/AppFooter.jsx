
import { PlayerDev } from "./PlayerDev.jsx"
import { Player } from "./Player.jsx"


export function AppFooter(song) {


    const songData = {
        videoId: 'ktvTqknDobU',
        title: 'Radioactive',
        img: 'src/assets/imgs/imagenDragon.webp'
    }


    return (
        <>
        <section className="app-footer">
                <section className="song-data">
                <img src={songData.img} />
            <h1>{songData.title}</h1>
            </section>
            <section className="player-container-main">
                <Player videoId={songData.videoId} />
            </section>
        </section>
        </>
    )
}