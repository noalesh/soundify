import { httpService } from '../http.service'

export const stationService = {
    query,
    getById,
    remove
}

async function query(filterBy = { txt: '' }) {
    console.log("query from remote service was called.")
    return httpService.get(`station`, filterBy)
}

function getById(stationId) {
    return httpService.get(`station/${stationId}`)
}

async function remove(stationId) {
    return httpService.delete(`song/${stationId}`)
}
