import { useState } from "react"
import { IconsSvg } from "./IconsSvg";

export function VolumeBar ({volume, onVolumeChange}) {


    console.log('volume:', volume, 'icon:', volumeIcon(volume));

    function volumeIcon(volume) {
        if (volume >= 50) return 'highVol';
        if (volume < 50 && volume != 0) return 'midVol';
        return 'muteVol';
    }

    const handleChange = (event) => {
        const newVolume = parseInt(event.target.value, 10);
        onVolumeChange(newVolume); // Call the function passed from AppFooter
      };
    

    return (
        <section className="volume-bar-container">
            <IconsSvg svgName={volumeIcon(volume)} />
                <input 
                    className="volume-bar"
                    id="volume-bar"
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={volume}
                    onChange={handleChange}
                    style={{ '--fill-percent': `${volume}%` }}
                    />
            </section>
    )
}