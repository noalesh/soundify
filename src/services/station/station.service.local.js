import { saveToStorage } from '../util.service.js'
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

//const STORAGE_KEY = 'station'
const STORAGE_KEY = 'stationDemiDb'
_createStationsFromGivenDemoData()


export const stationService = {
    query,
    getById,
    remove,
    getDefaultFilter
}
window.cs = stationService


async function query(filterBy = { txt: '' }) {
    console.log("query from local service was called.")
    var stations = await storageService.query(STORAGE_KEY)
    const { txt } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stations = stations.filter(station => regex.test(station.title))
    }
    
    return stations
}

function getById(stationId) {
    return storageService.get(STORAGE_KEY, stationId)
}

async function remove(stationId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, stationId)
}

function getDefaultFilter() {
    return {  }
}

function _createStationsFromGivenDemoData() {

    console.log("NOTICE - _createStationsFromGivenDemoData was called!!")
    const stations = [
        {
            "_id": "OXeMG8wNskc",
            "title": "Demi Playlist #1",
            "songs": ['song_a', 'song_b']
        },
        {
            "_id": "4XeMfdfNskc",
            "title": "Demi Playlist #2",
            "songs": ['song_ao', 'song_bo']
        },
        {
            "_id": "11eMG8wNskc",
            "title": "Demi Playlist #3",
            "songs": ['song_ar', 'song_br']
        },
        
    ]
    saveToStorage(STORAGE_KEY, stations)

}