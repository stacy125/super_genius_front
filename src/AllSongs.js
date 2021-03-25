import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom'

export default function Allsongs(props) {
    console.log(props);
    const renderSomesongss = [...props.songs].map((song) => (
        <div className="render">
            <div>{song.artist.name}</div>
            <p>{song.name}</p>
            <p>{song.playcount}</p>
            <div>
            <button onClick={() => props.editSong(song)}>
              <Link to='/edit'>
                        EDIT
            </Link>
                </button>
            </div>
        </div>
    ));
    return (
        <div>
            <div>{renderSomesongss}</div>
        </div>
    );
}