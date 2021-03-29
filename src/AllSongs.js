import { Link } from 'react-router-dom'
import './App.css';
import React, { Component } from "react"
import song from './Song';
class App extends Component {
    constructor() {
        super()
        this.state = {
            songs: [],
            currentSelected: {},
            newSong: {},
            SongToEdit: {}
        }
    }
    getAllSong = () => {
        const requestOptions = {
            method: "GET"
        }
        fetch("https://super-genius-back.herokuapp.com/songs", requestOptions)
            .then(res => res.json())
            .then(songs => {
                this.setState({ songs })
                console.log(songs)
            })
    }
    createNewSong = (e) => {
        e.preventDefault()
        const newSong = this.state.newSong
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSong)
        }
        fetch("https://super-genius-back.herokuapp.com/songs", requestOptions)
            .then(res => res.json())
            .then(returnedSong => {
                this.setState({ songs: [...this.state.songs, returnedSong] })
            })
    }
    componentDidMount() {
        this.getAllSong()
    }
    getCurrentSelected = (selectedSongData) => {
        this.setState({ currentSelected: selectedSongData })
    }
    handleFormChange = (e) => {
        this.setState({ newSong: { ...this.state.newSong, [e.target.name]: e.target.value } })
    }
    deleteSong = (id) => {
        console.log("deleted me:", id)
        fetch('https://super-genius-back.herokuapp.com/songs/' + id, { method: "DELETE" })
            .then(resp => resp.json())
            .then(deleteResp => {
                const updatedSongs = this.state.songs.filter(song => song._id != id)
                this.setState({ currentSelected: {}, songs: updatedSongs })
            })
    }
    getEditSong = (SongToEdit) => {
        this.setState({ SongToEdit })
    }
    handleEditChange = (e) => {
        this.setState({ SongToEdit: { ...this.state.SongToEdit, [e.target.name]: e.target.value } })
    }
    updateSong = (e) => {
        e.preventDefault()
        const { name, playcount, _id } = this.state.SongToEdit
        const updatedSong = { name, playcount }
        console.log(updatedSong, playcount, _id)
        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedSong)
        }
        fetch('https://super-genius-back.herokuapp.com/songs/' + _id, requestOptions)
            .then(resp => resp.json())
            .then(returnedUpdatedSong => {
                console.log(returnedUpdatedSong)
                const allUpdatedSongs = this.state.songs.map(song => song._id === _id ? returnedUpdatedSong : song)
                this.setState({ songs: allUpdatedSongs })
            })
    }
    
    render() {
        const { name, playcount, artist, _id } = this.state.currentSelected
        return (
            <div className="App">



                <div>
                    <h1>Create a Song</h1>
                    <form onSubmit={this.createNewSong}>
                        <input type="text" name="name" placeholder="enter name" value={this.state.newSong.name} onChange={this.handleFormChange} />
                        <input type="text" name="playcount" placeholder="enter playcount" value={this.state.newSong.playcount} onChange={this.handleFormChange} />
                        <button type="submit">Create Song</button>
                    </form>
                </div>


                <div>
                    <h1>Song Info</h1>
                    {this.state.currentSelected._id && <div>
                        <h2>Song Name: {name}</h2>
                        <h2>Playcount: {playcount}</h2>
                        <button onClick={() => this.deleteSong(_id)}>DELETE</button>
                        <button onClick={() => this.getEditSong(this.state.currentSelected)}>EDIT</button>
                    </div>}
                </div>


                <div>

                    {this.state.SongToEdit._id &&
                        <form onSubmit={this.updateSong}>
                            <input type="text" name="name" placeholder="enter name" value={this.state.SongToEdit.name} onChange={this.handleEditChange} />
                            <input type="text" name="url" placeholder="enter playcount" value={this.state.SongToEdit.playcount} onChange={this.handleEditChange} />
                            <button type="submit">Edit</button>
                        </form>}
                </div>


                <div>
                    <h1>All Songs</h1>
                    <h3>Click name for Song info</h3>
                    {this.state.songs.map(song => <div onClick={() => this.getCurrentSelected(song)} key={song._id}>{song.name}</div>)}
                </div>


            </div>

        );
    }
}
export default App;
