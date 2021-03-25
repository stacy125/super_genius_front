import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom'

export default function AllArtists(props) {
    console.log(props);
    const renderSomeartistss = props.artists.map((artist) => (
        <div className="render">
            <div>{artist.id} </div>
            <div>{artist.name}</div>
            <p>{artist.playcount}</p>
            <p>{artist.url}</p>
            <div>
                <button onClick={() => props.editArtist(artist)}>
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