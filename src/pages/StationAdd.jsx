import { useState, useEffect } from "react";

export function StationAdd({ defaultNewStationDetails }) {
    
    const [file, setFile] = useState();
    const [newStationDetails, setNewStationDetails] = useState(defaultNewStationDetails)

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
        addListenersDetailsModal () 
    }, [])    
   
    function onSetNewStationDetails() {
        // TODOOOOOOOO
        console.log("DEVELOPMENT NOTE _ TODO onSetNewStationDetails")
    }

    function onSubmitNewStation(ev) {
        ev.preventDefault()
        onSetNewStationDetails(newStationDetails)
        prompt(
            "TODO - development note - Save (new station) was clicked."
          )
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setNewStationDetails((prevDetails) => ({ ...prevDetails, [field]: value }))
    }

    const { name, description } = newStationDetails

    return (
        
    <section className="station-add">   
    
        <h3 className="dev-comments">This is StationAdd page.</h3>
        
        <div className="grid-item-1 station-add-header">
            <div className="flexbox-item-1">
                <img  src="/src/assets/imgs/Soundify-files/defaultPlaylistIcon.png" alt="default playlist icon"></img>
            </div>
            <div className="flexbox-item-2">
                <h5>Playlist</h5>
                <h1>new playlist</h1> 
                <h5>username | {/*userService.getLoggedinUser()*/} aaa</h5>
            </div>
           
        </div>

      <div className="grid-item-2">
        <button id="open-station-edit">
            Edit Details
        </button>
      </div>

      <dialog class="modal_details_container" id="modal_details_container">
        <div class="modal-details">
        <button id="close-station-edit">
                X
        </button>
        <h3>Edit details</h3>
        <form onSubmit={onSubmitNewStation}>
    
        <div className="uploadImg">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>

        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} type="text" name="name" id="name" />

        <label htmlFor="description">description: </label>
        <input value={description} onChange={handleChange} type="text" name="description" id="description" />

        </form>


        <section className="save-station-edit-container">
            <button id="save-station-edit">
                Save
            </button>
        </section>
           
        </div>
      </dialog>

 
      </section>




    )

}
