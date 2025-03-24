import { useState } from "react"
import { useSelector } from "react-redux"


import { Player } from "./Player.jsx"
import { VolumeBar } from "./VolumeBar.jsx"



export function AppFooter() {

    const currentSong = useSelector((storeState) => storeState.songModule.currentSong)

    console.log(currentSong);
    


    const [volume, setVolume] = useState(50)



    function handleVolumeChange(newVolume) {
        setVolume(newVolume)
    }
    console.log()

    return (
        <>
        <section className="app-footer">
            <section className="song-data">
               <img src={currentSong.imageUrl} />
               <div className="song-text">
                    <h1>{currentSong.title}</h1>
                    <span>{currentSong.artists[0].name}</span>
                </div>
            </section>
            <section className="player-container-main">
                <Player videoId={currentSong.videoId} volume={volume} />
            </section>
            <section className="volume-bar-container">
                <VolumeBar volume={volume} onVolumeChange={handleVolumeChange} />
            </section>
        </section>
        </>
    )
}