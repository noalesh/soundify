import { httpService } from '../http.service'

export const songService = {
    query,
    getById,
    remove
}

async function query(filterBy = { txt: '' }) {
    return httpService.get(`song`, filterBy)
}

function getById(songId) {
    return httpService.get(`song/${songId}`)
}

async function remove(songId) {
    return httpService.delete(`song/${songId}`)
}
// async function save(car) {
//     var savedCar
//     if (car._id) {
//         savedCar = await httpService.put(`car/${car._id}`, car)
//     } else {
//         savedCar = await httpService.post('car', car)
//     }
//     return savedCar
// }

// async function addCarMsg(carId, txt) {
//     const savedMsg = await httpService.post(`car/${carId}/msg`, {txt})
//     return savedMsg
// }