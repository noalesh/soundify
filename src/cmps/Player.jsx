import { PlayButton } from "./PlayButton";
import { useState, useEffect } from "react";

export function Player(song) {
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(292);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => (prev < totalDuration ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [totalDuration]);

  function setTime(ev) {
    const time = Number(ev.target.value);
    setCurrentTime(time);
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="player-container">
      <section className="player-btn">
        <button className="shaf-button">
          <img src="src/assets/imgs/Soundify-files/Shafle.svg" />
        </button>

        <button className="prev-button">
          <img src="src/assets/imgs/Soundify-files/PrevSong.svg" />
        </button>

        <PlayButton />

        <button className="next-button">
          <img src="src/assets/imgs/Soundify-files/NextSong.svg" />
        </button>

        <button className="rep-button">
          <img src="src/assets/imgs/Soundify-files/Repeat.svg" />
        </button>
      </section>

      <section className="time-line">
        <span className="song-time">{formatTime(currentTime)}</span>
        <div>
          <input
            className="song-bar"
            name="song-bar"
            id="song-bar"
            type="range"
            min={0}
            max={totalDuration}
            value={currentTime}
            onChange={setTime}
          />
        </div>
        <span className="total-time">{formatTime(totalDuration)}</span>
      </section>
    </section>
  );
}
