import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom'

export default function AllArtists(props) {
    console.log(props);
    const renderSomeartistss = props.artists.map((artist) => (
        <div className="render">
            <h3>Details</h3>
            <div>{artist.id} </div>
            <div>Artist: {artist.name}</div>
            <p>Plays: {artist.playcount}</p>
            <p>Url: {artist.url}</p>
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