import { useState, useEffect } from "react";

export function EditModal({ station , onCloseModal }) {
    console.log('hi i am modal i am active')
    
    const [file, setFile] = useState();
    const [newStationDetails, setNewStationDetails] = useState(station)
    const [currentActiveDiv, setCurrentActiveDiv] = useState(0);
   // const { title , img } = station

    //const [stationToEdit, setStationToEdit] = useState({img,title})

    function activate2Grid() {
        setCurrentActiveDiv(2);
    }

    function activate3Grid() {
        setCurrentActiveDiv(3);
    }

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function addListenersDetailsModal () {
        const open_station_edit = document.getElementById('open-station-edit')
        const modal_details_container = document.getElementById('modal_details_container')
        const close_station_edit = document.getElementById('save-station-edit')
        const close_station_edit_X = document.getElementById('close-station-edit')

        if (open_station_edit) { 
            open_station_edit.addEventListener('click', () => {
                modal_details_container.classList.add('show')
            })
        }
    
        if (close_station_edit) {
            close_station_edit.addEventListener('click', () => {
                modal_details_container.classList.remove('show')
            })
        } 

        if (close_station_edit_X) {
            close_station_edit_X.addEventListener('click', () => {
                modal_details_container.classList.remove('show')
            })
        } 
    }

    useEffect(() => {
        // addListenersDetailsModal () 
    }, [])    

    function onSubmitNewStation(ev) {
        ev.preventDefault()
        onCloseModal(newStationDetails)
        // stationService.save(newStationDetails)
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setNewStationDetails((prevDetails) => ({ ...prevDetails, [field]: value }))
    }

    const { name: title, description } = station

    return (

      <dialog class="modal_details_container show" id="modal_details_container">
        <div class="modal-details">
        <button id="close-station-edit">
            X
        </button>
        <h3>Edit details</h3>

            <form onSubmit={onSubmitNewStation}>
                <section className="modal-grid">

                <div className="uploadImg modal-grid-item-1">
                    <label htmlFor="imgPicker" >
                        Choose photo
                    </label>
                    <input id="imgPicker" type="file" onChange={handleChange} style={{visibility:"hidden"}} />
                    <img src={file} style={{visibility:"hidden"}} />
                </div>

                <div className={currentActiveDiv==2 ? "chosen modal-grid-item-2" : "modal-grid-item-2"} onClick={activate2Grid} >
                    <label htmlFor="name">Name: </label>
                    <input value={title} onChange={handleChange} type="text" name="title" id="title" />
                </div>

                { <div className={currentActiveDiv==3 ? "chosen modal-grid-item-3" : "modal-grid-item-3"} onClick={activate3Grid} >
                <input value={description} onChange={handleChange} type="text" name="description" id="description" placeholder={"Add an optional description"}  />
                </div> }

                </section>

                <section className="save-station-edit-container">
                <button id="save-station-edit">
                    Save
                </button>
        </section>
        </form>
   
      </div>
      </dialog>

    




    )

}
