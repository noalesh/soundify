import { useState } from "react"

export function VolumeBar ({volume, onVolumeChange}) {

    function volumeIcon(volume) {
        if (volume >= 50) return 'src/assets/imgs/Soundify-files/FullAudio.svg';
        if (volume < 50 && volume != 0) return 'src/assets/imgs/Soundify-files/LessAudio.svg';
        return 'src/assets/imgs/Soundify-files/Mute.svg';
    }

    const handleChange = (event) => {
        const newVolume = parseInt(event.target.value, 10);
        onVolumeChange(newVolume); // Call the function passed from AppFooter
      };
    

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
                    onChange={handleChange}
                    />
            </section>
    )
}