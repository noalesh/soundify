
export function StationAdd() {
    
    function addListenersDetailsModal () {
        const open_station_edit = document.getElementById('open-station-edit')
        const modal_details_container = document.getElementById('modal_details_container')
        const close_station_edit = document.getElementById('save-station-edit')
    
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
    }
   

    return (
        
    <section className="station-add">   
    
        <h3 className="dev-comments">This is StationAdd page.</h3>
        <h3 className="dev-comments">TODO... UNDER CONSTRUCTION.</h3>  
        
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

      <div class="modal-details-container" id="modal-details-container">
        <div class="modal-details">
            <h3>Edit playlist details</h3>
            <form>
                <h4>This is a form... UNDER CONSTRUCTION</h4>
            </form>
            <button id="save-station-edit">
                Save
            </button>
        </div>
      </div>

      {    addListenersDetailsModal()
 }
      </section>




    )

}
