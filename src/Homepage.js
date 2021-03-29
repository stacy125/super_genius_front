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
            <div className="home">
                <header className="header">WELCOME WE HOPE YOU ENJOY THIS SONG AND ARTIST API!!!</header>
            </div>
        );
    }
}