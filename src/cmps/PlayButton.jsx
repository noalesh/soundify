export function PlayButton({ isPlaying, onTogglePlay }) {
    return (
      <button className="play-pause-btn" onClick={onTogglePlay}>
        <img 
          src={isPlaying ? "src/assets/imgs/Soundify-files/Pause.svg" : "src/assets/imgs/Soundify-files/PlayButton.svg"} 
          alt={isPlaying ? "Pause" : "Play"} 
        />
      </button>
    );
  }