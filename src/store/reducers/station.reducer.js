import { stationService } from "../../services/station/station.service.local.js"


// TODO - getDefaultFilter should be in local services or remote ? 

export const SET_STATIONS = 'SET_STATIONS'
export const SET_STATION = 'SET_STATION'
export const REMOVE_STATION = 'REMOVE_STATION'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'

export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'


const initialState = {
    stations: [],
    cuurentStation: null,
    isLoading: false,
    filterBy: stationService.getDefaultFilter()
}

export function stationReducer(state = initialState, action) {
    var newState = state
    var stations
    switch (action.type) {
        case SET_STATIONS:
            newState = { ...state, stations: action.stations }
            break
        case SET_STATION:
            newState = { ...state, cuurentStation: action.station }
            break
        case REMOVE_STATION:
        // TODO - removed because we think it's a part of the UNDO implementation. 
        //   const lastRemovedStation = state.stations.find(station => station._id === action.stationId)
            stations = state.stations.filter(station => station._id !== action.stationId)
           // newState = { ...state, stations, lastRemovedStation }
           newState = { ...state, stations}
            break
        case ADD_STATION:
            newState = { ...state, stations: [...state.stations, action.station] }
            break
        case UPDATE_STATION:
            stations = state.stations.map(station => (station._id === action.station._id) ? action.station : station)
            newState = { ...state, stations }
            break
            case SET_FILTER_BY:
                newState =  {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy }
            }
            break
        case SET_IS_LOADING:
            newState = {
                ...state,
                isLoading: action.isLoading
            }
            break
        default:
    }
    return newState
}

// unitTestReducer()
/*
function unitTestReducer() {
    var state = initialState
    const car1 = { _id: 'b101', vendor: 'Car ' + parseInt(Math.random() * 10), msgs: [] }
    const car2 = { _id: 'b102', vendor: 'Car ' + parseInt(Math.random() * 10), msgs: [] }

    state = carReducer(state, { type: SET_CARS, cars: [car1] })
    console.log('After SET_CARS:', state)

    state = carReducer(state, { type: ADD_CAR, car: car2 })
    console.log('After ADD_CAR:', state)

    state = carReducer(state, { type: UPDATE_CAR, car: { ...car2, vendor: 'Good' } })
    console.log('After UPDATE_CAR:', state)

    state = carReducer(state, { type: REMOVE_CAR, carId: car2._id })
    console.log('After REMOVE_CAR:', state)

    const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
    state = carReducer(state, { type: ADD_CAR_MSG, carId: car1._id, msg })
    console.log('After ADD_CAR_MSG:', state)

    state = carReducer(state, { type: REMOVE_CAR, carId: car1._id })
    console.log('After REMOVE_CAR:', state)
}

*/