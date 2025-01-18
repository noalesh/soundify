import { useState } from "react"

export function VolumeBar () {

    const [volume, setVolume] = useState(50)


    
    function onSetVolume(ev) {
        const newVolume = Number(ev.target.value)
        setVolume(newVolume)
    }

    function volumeIcon(volume) {
        if (volume === 0) return 'src/assets/imgs/Soundify-files/mute.svg';
        if (volume < 50) return 'src/assets/imgs/Soundify-files/LessAudio.svg';
        return 'src/assets/imgs/Soundify-files/FullAudio.svg';
    }
    

    return (
        <section className="volume-bar-container">
            <img src={volumeIcon(volume)} />
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