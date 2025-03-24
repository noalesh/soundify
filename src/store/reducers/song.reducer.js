

export const SET_SONG = 'SET_SONG'


const song =   {
    _id: "B1C2D3",
    title: "You Oughta Know",
    artists: [{ "name": "Alanis Morissette", "spotifyId": "6ogn9necmbUdCppmNnGOdi" }],
    imageUrl: "https://i.scdn.co/image/ab67616d0000b27392c885317fbe4bfa680109b4",
    videoId: "NPcyTyilmYY"
  }

const initialState = {
    currentSong: song,
}


export function songReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SONG:
            return { ...state, currentSong: action.song }
        default:
            return state
    }
}