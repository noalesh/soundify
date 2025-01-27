import axios from "axios";

const API_KEY = 'AIzaSyBXxB0M5qM9Z9xa72wp2sRCVaYEiE-7qG4'
const url = `https://www.googleapis.com/youtube/v3/search`



export async function getVideoId(query) {
    let videoId = ''

    try {
        const youTubeResponse = await axios.get(url, 
            {
                params: {
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    maxResults: 1,
                    key: API_KEY,
                },
            }
        )
        videoId = youTubeResponse.data.items[0]?.id?.videoId
    } catch (err) {
        console.log('YouTube Search error:', err);
        
    }

    return videoId
}

window.getVideoId = getVideoId


