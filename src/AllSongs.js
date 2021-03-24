import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom'

export default function Allsongs(props) {
    const renderSomesongss = [...props.song].map((song) => (
        <div className="render">
            <div>{song.name}</div>
            <p>{song.playcount}</p>
            <p>{song.artist}</p>
            <div>
                <button onClick={() => props.editsongs(songs)}>
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