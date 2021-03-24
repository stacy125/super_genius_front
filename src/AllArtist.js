import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom'

export default function AllArtists(props) {
    const renderSomeartistss = [...props.artist].map((artist) => (
        <div className="render">
            <div>{artist.name}</div>
            <p>{artist.playcount}</p>
            <p>{artist.listener}</p>
            <div>
                <button onClick={() => props.editartists(artists)}>
                    <Link to='/edit'>
                        EDIT
            </Link>
                </button>
            </div>
        </div>
    ));
    return (
        <div>
            <div>{renderSomeartistss}</div>
        </div>
    );
}