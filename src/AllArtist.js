
import { Link } from 'react-router-dom'
import './App.css';
import React, { Component } from "react"
class App extends Component {
    constructor() {
        super()
        this.state = {
            artists: [],
            currentSelected: {},
            newArtist: {},
            ArtistToEdit: {}
        }
    }
    getAllArtist = () => {
        const requestOptions = {
            method: "GET"
        }
        fetch("https://super-genius-back.herokuapp.com/artist", requestOptions)
            .then(res => res.json())
            .then(artists => {
                this.setState({ artists })
            })
    }
    createNewArtist = (e) => {
        e.preventDefault()
        const newArtist = this.state.newArtist
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArtist)
        }
        fetch("https://super-genius-back.herokuapp.com/artist", requestOptions)
            .then(res => res.json())
            .then(returnedArtist => {
                this.setState({ artists: [...this.state.artists, returnedArtist] })
            })
    }
    componentDidMount() {
        this.getAllArtist()
    }
    getCurrentSelected = (selectedArtistData) => {
        this.setState({ currentSelected: selectedArtistData })
    }
    handleFormChange = (e) => {
        this.setState({ newArtist: { ...this.state.newArtist, [e.target.name]: e.target.value } })
    }
    deleteArtist = (id) => {
        console.log("deleted me:", id)
        fetch('https://super-genius-back.herokuapp.com/artist/' + id, { method: "DELETE" })
            .then(resp => resp.json())
            .then(deleteResp => {
                const updatedArtists = this.state.artists.filter(artist => artist._id != id)
                this.setState({ currentSelected: {}, artists: updatedArtists })
            })
    }
    getEditArtist = (ArtistToEdit) => {
        this.setState({ ArtistToEdit })
    }
    handleEditChange = (e) => {
        this.setState({ ArtistToEdit: { ...this.state.ArtistToEdit, [e.target.name]: e.target.value } })
    }
    updateArtist = (e) => {
        e.preventDefault()
        const { name, url, playcount, _id } = this.state.ArtistToEdit
        const updatedArtist = { name, url }
        console.log(updatedArtist, playcount, _id)
        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedArtist)
        }
        fetch('https://super-genius-back.herokuapp.com/artist/' + _id, requestOptions)
            .then(resp => resp.json())
            .then(returnedUpdatedArtist => {
                console.log(returnedUpdatedArtist)
                const allUpdatedArtists = this.state.artists.map(artist => artist._id === _id ? returnedUpdatedArtist : artist)
                this.setState({ artists: allUpdatedArtists })
            })
    }
    render() {
        const { name, url, playcount, _id } = this.state.currentSelected
        return (
            <div className="App">



                <div>
                    <h1>Create an Artist</h1>
                    <form onSubmit={this.createNewArtist}>
                        <input type="text" name="name" placeholder="enter name" value={this.state.newArtist.name} onChange={this.handleFormChange} />
                        <input type="text" name="url" placeholder="enter url" value={this.state.newArtist.url} onChange={this.handleFormChange} />
                        <input type="text" name="playcount" placeholder="enter playcount" value={this.state.newArtist.playcount} onChange={this.handleFormChange} />
                        <button type="submit">Create Artist</button>
                    </form>
                </div>


                <div>
                    <h1>Artist Info</h1>
                    {this.state.currentSelected._id && <div>
                        <h2>Name: {name}</h2>
                        <h2>URL: {url}</h2>
                        <h2>Playcount: {playcount}</h2>
                        <button onClick={() => this.deleteArtist(_id)}>DELETE</button>
                        <button onClick={() => this.getEditArtist(this.state.currentSelected)}>EDIT</button>

                    </div>}
                </div>


                <div>

                    {this.state.ArtistToEdit._id &&
                        <form onSubmit={this.updateArtist}>
                            <input type="text" name="name" placeholder="enter name" value={this.state.ArtistToEdit.name} onChange={this.handleEditChange} />
                            <input type="text" name="url" placeholder="enter url" value={this.state.ArtistToEdit.url} onChange={this.handleEditChange} />
                            <button type="submit">EDIT Artist</button>
                        </form>}
                </div>


                <div>
                    <h1>All Artist</h1>
                    <h3>Click name for Artist info</h3>
                    {this.state.artists.map(artist => <div onClick={() => this.getCurrentSelected(artist)} key={artist._id}>{artist.name}</div>)}
                </div>


            </div>

        );
    }
}
export default App;