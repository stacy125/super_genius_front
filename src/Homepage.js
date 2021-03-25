import React, { Component } from 'react';
import Artist from './Artist.js'
import Song from './Song.js'

export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            oneSong: '',
            oneArtist: ""
        }
    }
    getSong = (e, songName) => {
        const songInput = songName
        const song = this.props.songs.filter(song => {
            return song.name.toLowerCase() === songInput.toLowerCase()
        })
        this.setState({ oneSong: song })
    }
    getArtist = (e, artistName) => {
        const artistInput = artistName
        const artist = this.props.artists.filter(artist => {
            return artist.name.toLowerCase() === artistInput.toLowerCase()
        })
        this.setState({ oneArtist: artist })
    }
    
    handleSong = (e) => {
        this.setState({ value: e.target.value })
    }
    handleArtist = (e) => {
        this.setState({ value: e.target.value })
    }
    
    render() {
        console.log("hello");
        return (
            <div>
                <header className="header">WELCOME WE HOPE YOU ENJOY THIS SONG AND ARTIST API!!!</header>

                <button className="submit" onClick={(e) => this.getSong(e, this.state.value)}>
                    Click to get your song
				</button>
                <div className="search-container">
                    <input
                        className="search"
                        type="text"
                        placeholder="search song"
                        value={this.state.value}
                        onChange={this.handleSong}
                    />
                </div>
                {this.state.oneSong.length !== 0 ? <Song song={this.state.oneSong} /> : null}
                <button className="submit" onClick={(e) => this.getArtist(e, this.state.value)}>
                    Click to get your artist
				</button>
                <div className="search-container">
                    <input
                        className="search"
                        type="text"
                        placeholder="search artist"
                        value={this.state.value}
                        onChange={this.handleArtist}
                    />
                </div>
                {this.state.oneArtist.length !== 0 ? <Artist artist={this.state.oneArtist} /> : null}
            </div>
        );
    }
}