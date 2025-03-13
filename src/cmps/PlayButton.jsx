

import { IconsSvg } from "./IconsSvg";

export function PlayButton({ isPlaying, onTogglePlay }) {
    return (
        <button className="play-pause-btn" onClick={onTogglePlay}>
            {isPlaying ? (
                <img 
                    src="src/assets/imgs/Soundify-files/Pause.svg" 
                    alt="Pause" 
                />
            ) : (
                <IconsSvg svgName="play" /> 
            )}
        </button>
    );
}