import { saveToStorage } from '../util.service.js'
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

//const STORAGE_KEY = 'station'
const STORAGE_KEY = 'stationDemiDb'
_createStationsFromGivenDemoData()

const demoStation = {
    _id:'1234',
    name: "demo station",
    createdBy: {
        id: "uId",
    },
    songs: [
        // {SongObject1},{Song2}
    ]

}


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
            "createdBy": {
                "_id": "u101",
                "full Name": "Sheka Teka",
                "imgUrl": ""
            },
            "songs": [{
                "_id": "ghe6r",
                "title": "song title a",
                "url": "",
                "addedBy": "",
                "addedAt": 14012025
            },
            {
                "_id": "whegr",
                "title": "song title b",
                "url": "",
                "addedBy": "",
                "addedAt": 14012025
            }
        ]
        },
        {
            "_id": "4XeMfdfNskc",
            "title": "Demi Playlist #2",
            "createdBy": {
                "_id": "8y01",
                "full Name": "Sheka Teka",
                "imgUrl": ""
            },
            "songs": [{
                "_id": "rhe6r",
                "title": "song title ao",
                "url": "",
                "addedBy": "",
                "addedAt": 14012025
            },
            {
                "_id": "1hegr",
                "title": "song title bo",
                "url": "",
                "addedBy": "",
                "addedAt": 14012025
            }]
        },
        {
            "_id": "11eMG8wNskc",
            "title": "Demi Playlist #3",
            "createdBy": {
                "_id": "r401",
                "full Name": "Moshe Siman Tov",
                "imgUrl": ""
            },
            "songs": [{
                "_id": "tye6r",
                "title": "song title ai",
                "url": "",
                "addedBy": "",
                "addedAt": 14012025
            },
            {
                "_id": "3hegr",
                "title": "song title bi",
                "url": "",
                "addedBy": "",
                "addedAt": 14012025
            }]
        },
        
    ]
    saveToStorage(STORAGE_KEY, stations)

}