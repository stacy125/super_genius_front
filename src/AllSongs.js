import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom'

export default function Allsongs(props) {
    console.log(props);
    const renderSomesongs = [...props.songs].map((song) => (
        <div className="render">
            <h3>Details</h3>
            <div>Artist: {song.artist.name}</div>
            <p>Song: {song.name}</p>
            <p>Plays: {song.playcount}</p>
            <div>
            <button className="edit" onClick={() => props.editSong(song)}>
              <Link to='/edit'>
                        EDIT
            </Link>
                </button>
            </div>
        </div>
    ));
    return (
        <div className="list">
            <div className="list-container">
            <div>{renderSomesongs}</div>
            </div>
        </div>
    );
}