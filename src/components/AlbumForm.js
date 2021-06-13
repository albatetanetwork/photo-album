import React, {useState} from 'react'

function AlbumForm() {
     const [albumTitle, setAlbumTitle] = useState("")
     
     function handleChangeAlbumTitle(e) {
         setAlbumTitle(e.target.value)
     }
 

    return (
      <form>
        <input 
        name="albumTitle" 
        value={albumTitle} 
        onChange={handleChangeAlbumTitle} 
        />
        <button type="submit">Submit</button>
      </form>
    );
}

export default AlbumForm;