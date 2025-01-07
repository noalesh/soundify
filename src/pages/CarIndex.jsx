import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStation, addStation, updateStation, removeStation } from '../store/actions/car.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { stationService } from '../services/station/'
import { userService } from '../services/user'

import { StationList } from '../cmps/StationList'
import { SearchBar } from '../cmps/SearchBar'
//TODO: Manage the service to search by song or station 
export function StationIndex() {

    const [ filterBy, setFilterBy ] = useState(stationService.getDefaultFilter())
    const stations = useSelector(storeState => storeState.stationModule.stations)

    useEffect(() => {
        loadStation(filterBy)
    }, [filterBy])

    async function onRemoveStation(stationId) {
        try {
            await removeStation(stationId)
            showSuccessMsg('Station removed')            
        } catch (err) {
            showErrorMsg('Cannot remove Station')
        }
    }

    async function onRemoveSong(songId) {
        try {
            await removeSong(songId)
            showSuccessMsg('Song removed')            
        } catch (err) {
            showErrorMsg('Cannot remove Song')
        }
    }

    async function onAddSong() {
        //TODO: Adding the option to add songs to the station 
        try {
            const savedSong = await addSong(song)
            showSuccessMsg(`Song added (id: ${savedSong._id})`)
        } catch (err) {
            showErrorMsg('Cannot add song')
        }        
    }
    async function onAddStation() {
        //TODO: Adding the option to add station 
        try {
            const savedStation = await addStation(station)
            showSuccessMsg(`STation added (id: ${savedStation._id})`)
        } catch (err) {
            showErrorMsg('Cannot add Station')
        }        
    }


    async function onEditStationDetails(station) {
        //TODO: adding the functionality of editing station details
        try {
            const savedStation = await updateCar(stationToSave)
            showSuccessMsg(`Station updated`)
        } catch (err) {
            showErrorMsg('Cannot update Station')
        }        
    }

    return (
        <main className="station-index">
            <header>
                <h2>Stations</h2>
                {userService.getLoggedinUser() && <button onClick={onAddStation}>New Station</button>}
            </header>
            <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} />
            <StationList
                songs={songs}
                onRemoveSong={onRemoveSong} 
                onAddSong={onAddSong}/>
        </main>
    )
}