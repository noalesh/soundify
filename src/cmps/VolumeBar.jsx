import { useState } from "react"

export function VolumeBar () {

    const [volume, setVolume] = useState(0)


    
    function onSetVolume(ev) {
        const newVolume = Number(ev.target.value)
        setVolume(newVolume)
    }


    return (
        <section className="volume-bar-container">
            <img src={ volume < 50 ? 'src/assets/imgs/Soundify-files/LessAudio.svg' : 'src/assets/imgs/Soundify-files/FullAudio.svg'} />
                <input 
                    className="volume-bar"
                    id="volume-bar"
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={volume}
                    onChange={onSetVolume}
                    />
            </section>
    )
}