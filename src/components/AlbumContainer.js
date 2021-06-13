import React, { useState, useEffect } from "react"
import {photoData} from "../data/photoData"
import Album from './Album'
import AlbumForm from "./AlbumForm";

function AlbumContainer() {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        setAlbums(photoData);
    }, []);

    function populateAlbums() {
        return albums.map((album, idx) => (
            <Album album={album} key={`album-${idx}`} />
        ));
    }

    return (
      <div>
        {albums && populateAlbums()}
        <AlbumForm />
      </div>
    );
}

export default AlbumContainer;