const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { stationService as local } from './station.service.local'
import { stationService as remote } from './station.service.remote'

// function getEmptyCar() {
// 	return {
// 		vendor: makeId(),
// 		speed: getRandomIntInclusive(80, 240),
// 		msgs: [],
// 	}
// }

function getDefaultFilter() {
    return {
        txt: ''
    }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const stationService = { getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.stationService = stationService
