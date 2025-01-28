import { useState,useEffect,useRef } from "react"

    export function PlayerDev({videoId}) {
        const [isPlaying, setIsPlaying] = useState(false)
        const [currentTime, setCurrentTime] = useState(0)
        const [totalDuration, setTotalDuration] = useState(0)
        const [volume, setVolume] = useState(50)

        const playerRef = useRef(null)


        useEffect(() => {

            window.onYouTubeIframeAPIReady = loadYouTubePlayer;
            console.log('currentTime:',currentTime)

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


        function handlePlayerReady(event) {
            setTotalDuration(event.target.getDuration())
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

        function handleVolumeChange(e) {
            const newVolume = e.target.value
            setVolume(newVolume)
            if (playerRef.current) {
                playerRef.current.setVolume(newVolume)
            }
        }

        function formatTime(currentTime) {
            const minutes = Math.floor(currentTime / 60);
            const seconds = Math.floor(currentTime % 60);
            
            const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
          
            return `${minutes}:${formattedSeconds}`;
          }


    return (
        <section className="player-container player">
          <section className="player-btn">
            <button className="shaf-button">
              <img src="src/assets/imgs/Soundify-files/Shafle.svg" alt="Shuffle" />
            </button>
      
            <button className="prev-button">
              <img src="src/assets/imgs/Soundify-files/PrevSong.svg" alt="Previous" />
            </button>
      
            <button onClick={handlePlayPause} className="play-button">
              {isPlaying ? "Pause" : "Play"}
            </button>
      
            <button className="next-button">
              <img src="src/assets/imgs/Soundify-files/NextSong.svg" alt="Next" />
            </button>
      
            <button className="rep-button">
              <img src="src/assets/imgs/Soundify-files/Repeat.svg" alt="Repeat" />
            </button>
          </section>
      
          
          <div id="player" style={{ display: "none" }}></div>
      
          
          <section className="time-line">
            <span className="song-time">{formatTime(currentTime * 100)}</span>
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
              />
            </div>
            <span className="total-time">{formatTime(totalDuration)}</span>
          </section>
        </section>
      );

//     return (
//     <section className="player-container player">
//         <section className="player-btn">
//             <button className="shaf-button">
//                 <img src="src/assets/imgs/Soundify-files/Shafle.svg" />
//             </button>
            
//             <button className="prev-button">
//                 <img src="src/assets/imgs/Soundify-files/PrevSong.svg" />
//             </button>

//             <button onClick={handlePlayPause} className="play-button">Play</button>

//             <button className="next-button">
//                 <img src="src/assets/imgs/Soundify-files/NextSong.svg" />
//             </button>

//             <button className="rep-button">
//                 <img src="src/assets/imgs/Soundify-files/Repeat.svg" />
//             </button>
//             </section>
       
        
            
       
//         <section className="time-line">
//             <span className="song-time">{formatTime(currentTime)}</span>
//             <div>
//                 <input
//                     className="song-bar"
//                     name="song-bar"
//                     id="song-bar"
//                     type="range"
//                     min={0}
//                     max={totalDuration}
//                     value={currentTime}
//                     onChange={handleProgressBarChange}
//                  />   
//             </div>
//             <span className="total-time">{formatTime(totalDuration)}</span>
        

//         </section>
//     </section>

// )
}