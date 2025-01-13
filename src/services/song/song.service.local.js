
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'song'

const demoSong = {
    _id:'1234',
    title:'Demo Song',
    artist:'',
    url:'',
    imgUrl:'',
    addedBy:{},
    addedAt:'time'
}

export const songService = {
    query,
    getById,
    remove,
}
window.cs = songService


async function query(filterBy = { txt: '' }) {
    var songs = await storageService.query(STORAGE_KEY)
    const { txt } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        songs = songs.filter(song => regex.test(song.name) || regex.test(song.artist))
    }
    
    return songs
}

function getById(songId) {
    return storageService.get(STORAGE_KEY, songId)
}

async function remove(songId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, songId)
}
//No need to save or to edit songs 
// async function save(song) {
//     var savedSong
//     if (song._id) {
//         const songToSave = {
//             _id: car._id,
//             price: car.price,
//             speed: car.speed,
//         }
//         savedCar = await storageService.put(STORAGE_KEY, carToSave)
//     } else {
//         const carToSave = {
//             vendor: car.vendor,
//             price: car.price,
//             speed: car.speed,
//             // Later, owner is set by the backend
//             owner: userService.getLoggedinUser(),
//             msgs: []
//         }
//         savedCar = await storageService.post(STORAGE_KEY, carToSave)
//     }
//     return savedCar
// }

// async function addCarMsg(carId, txt) {
//     // Later, this is all done by the backend
//     const car = await getById(carId)

//     const msg = {
//         id: makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     car.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, car)

//     return msg
// }