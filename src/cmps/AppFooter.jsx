import { useState } from "react"

import { PlayerDev } from "./PlayerDev.jsx"
import { Player } from "./Player.jsx"
import { VolumeBar } from "./VolumeBar.jsx"



export function AppFooter(song) {


    const [volume, setVolume] = useState(50)


    const songData = {
        videoId: 'ktvTqknDobU',
        title: 'Radioactive',
        img: 'src/assets/imgs/imagenDragon.webp'
    }

    function handleVolumeChange(newVolume) {
        setVolume(newVolume)
    }


    return (
        <>
        <section className="app-footer">
                <section className="song-data">
                <img src={songData.img} />
            <h1>{songData.title}</h1>
            </section>
            <section className="player-container-main">
                <Player videoId={songData.videoId} volume={volume} />
            </section>
            <section className="volume-bar-container">
                <VolumeBar volume={volume} onVolumeChange={handleVolumeChange} />
            </section>
        </section>
        </>
    )
}