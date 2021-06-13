import React from 'react'
import './App.css'
import Album from './components/Album'
import AlbumContainer from './components/AlbumContainer'
import {photoData} from './data/photoData'


function App() {
  return (
    <div>
      <h1>Photo Album</h1>
      <p>An app to create photo albums</p>
      <Album album={photoData[0]} />
      <AlbumContainer />
    </div>
  );
}

export default App;
