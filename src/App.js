import './App.css';
import { Component } from 'react';
import Navigation from './Navigation.js';
import AllSongs from './AllSongs.js'
import AllArtist from './AllArtist.js'
import Homepage from './Homepage.js'
import Form from './Form'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.updateSong = this.updateSong.bind(this)
    this.state = {
      songs: [],
      artists: [],
      Loading: true
    };
  }

  componentDidMount() {
    fetch('https://super-genius-back.herokuapp.com/songs')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          songs: data,
          Loading: false
        });
      });

    fetch('https://super-genius-back.herokuapp.com/artist')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          artists: data,
          Loading: false
        });
      });
  }
  updateSong = (e) => {
    e.preventDefault()
    const { name, url, _id } = this.state.songToEdit
    const updatedSong = { name, url }
    console.log(updatedSong, _id)
    const requestOptions = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedSong)
    }
    fetch('https://super-genius-back.herokuapp.com/songs' + _id, requestOptions)
      .then(resp => resp.json())
      .then(returnedUpdatedSong => {
        console.log(returnedUpdatedSong)
        const allUpdatedSong = this.state.songs.map(song => song._id === _id ? returnedUpdatedSong : song)
        this.setState({ songs: allUpdatedSong })
      })
    console.log("hello");
  }
  editSong = (songToEdit) => {
    this.setState({ oneSong: songToEdit })
  }
  editArtist = (artistToEdit) => {
    this.setState({ oneArtist: artistToEdit })
  }

  render() {
    return (
      <div className="App" >
        <div className="app-box">
          <Navigation />
          <Switch>
            <Route exact path="/home">
              <Homepage songs={this.state.songs} />
            </Route>
            <Route exact path='/allsongs'>
              <AllSongs songs={this.state.songs} editSong={(song) => song !== undefined ? this.editSong(song) : null} />
            </Route>
            <Route exact path='/edit'>
              <Form songToEdit={this.state.oneSong} artistToEdit={this.state.oneArtist} />
            </Route>
            <Route exact path="/home">
              <Homepage artists={this.state.artists} />
            </Route>
            <Route exact path='/allartists'>
              <AllArtist artists={this.state.artists} editArtist={(artist) => artist !== undefined ? this.editArtist(artist) : null} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
