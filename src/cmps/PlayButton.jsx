

import { IconsSvg } from "./IconsSvg";

export function PlayButton({ isPlaying, onTogglePlay }) {
    return (
        <button className="play-button-footer" onClick={onTogglePlay}>
            {isPlaying ? (
                <IconsSvg svgName={'pause'} />
            ) : (
                <IconsSvg svgName="play" /> 
            )}
        </button>
    );
}