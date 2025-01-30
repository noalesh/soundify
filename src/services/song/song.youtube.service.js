const {VITE_YOUTUBE_API_KEY} = import.meta.env
import axios from "axios";


const API_KEY = VITE_YOUTUBE_API_KEY
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


