import { useState,useEffect,useRef } from "react"
import { IconsSvg } from "./IconsSvg"
import { PlayButton }  from "./PlayButton"

    export function Player({videoId , volume}) {
        const [isPlaying, setIsPlaying] = useState(false)
        const [currentTime, setCurrentTime] = useState(0)
        const [totalDuration, setTotalDuration] = useState(0)
        

        const playerRef = useRef(null)


        useEffect(() => {

            window.onYouTubeIframeAPIReady = loadYouTubePlayer;
            

            function loadYouTubePlayer() {
                if (window.YT && window.YT.Player) {
                    playerRef.current = new window.YT.Player("player", {
                        height: "0", // Hide the video
                        width: "0", // Hide the video
                        videoId,
                        playerVars: {
                            autoplay: 0,
                            controls: 0,
                            modestbranding: 1,
                      },
                      events: {
                        onReady: handlePlayerReady,
                        onStateChange: handlePlayerStateChange,
                      },
                    });
                  }
                };
              
                if (!window.YT) {
                  const script = document.createElement("script");
                  script.src = "https://www.youtube.com/iframe_api";
                  script.async = true;
                  document.body.appendChild(script);
              
                  window.onYouTubeIframeAPIReady = loadYouTubePlayer;
                } else {
                    loadYouTubePlayer();
                }
              
                return () => {
                  if (playerRef.current) {
                    playerRef.current.destroy();
                  }
                };
              }, [videoId]);


        useEffect(() => {
          if(playerRef.current && playerRef.current.setVolume) {
            playerRef.current.setVolume(volume)
          }
        }, [volume])

        function handlePlayerReady(event) {
            setTotalDuration(event.target.getDuration())
            event.target.setVolume(volume);
        }

        function handlePlayerStateChange(event) {
            if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true)
                startUpdatingTime()
            } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false)
                stopUpdatingTime()
            }
        }

        function startUpdatingTime() {
            const interval = setInterval(() => {
                if(playerRef.current) {
                    const currentTime = playerRef.current.getCurrentTime()
                    setCurrentTime(currentTime)
                }
            }, 1000)
            return interval
        }

        

        function stopUpdatingTime() {
            clearInterval(updateTimeInterval)
        }

        function handlePlayPause() {
            if (playerRef.current) {
                if(isPlaying) {
                    playerRef.current.pauseVideo()
                } else {
                    playerRef.current.playVideo()
                }
            }
        }

        function handleProgressBarChange(e) {
            if(playerRef.current) {
                const newTime = e.target.value
                playerRef.current.seekTo(newTime, true)
            }
        }    

          function formatTime(seconds) {
            
            seconds = Math.floor(seconds);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
            return `${minutes}:${paddedSeconds}`;      
        }


    return (
        <section className="player-container">
          <section className="player-btn">
            
            <IconsSvg svgName={'shuffle'} className="shaf-button" />
            <IconsSvg svgName={'prev'} className="prev-button" />
      
            <PlayButton isPlaying={isPlaying} onTogglePlay={handlePlayPause} />

            <IconsSvg svgName={'next'} className="next-button" />
            <IconsSvg svgName={'repeat'} className="rep-button" />
      
          </section>
      
          
          <div id="player" style={{ display: "none" }}></div>
      
          
          <section className="time-line">
            <span className="song-time">{formatTime(currentTime)}</span>
            <div>
              <input
                className="song-bar"
                name="song-bar"
                id="song-bar"
                type="range"
                min={0}
                max={totalDuration || 0} 
                value={currentTime || 0} 
                onChange={handleProgressBarChange}
                style={{ '--fill-percent': `${(currentTime / totalDuration) * 100}%` }}
              />
            </div>
            <span className="total-time">{formatTime(totalDuration)}</span>
          </section>

          
        </section>
      );
}