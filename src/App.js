import './App.css';
import { Component } from 'react';
import Artist from './Artist.js';
import Song from './Song.js';
import Navigation from './Navigation.js';
import AllSongs from './AllSongs.js'
import AllArtist from './AllArtist.js'
import Form from './Form'
import { Switch, Route, NavLink } from 'react-router-dom';


class App extends Component() {
  constructor(props) {
    super(props)
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
          song: data,
          artist: data,
          Loading: false
        });
      });
  }
  componentDidMount() {
    fetch('https://super-genius-back.herokuapp.com/artist')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          song: data,
          artist: data,
          Loading: false
        });
      });
  }
  editSong = (songToEdit) => {
    console.log('edit song', songToEdit)

    this.setState({ oneSong: songToEdit })
  }
  editArtist = (artistToEdit) => {
    console.log('edit artist', artistToEdit)

    this.setState({ oneArtist: artistToEdit })
  }

  return() {
    return (
    <div className="App" >
        <Switch>
          <Route exact path="/home">
            <Homepage songs={this.state.songs} />
          </Route>
          <Route exact path='/allsongs'>
            <AllSongs songs={this.state.songs} editSong={(song) => song !== undefined ? this.editSong(song) : null} />
          </Route>
          <Route exact path='/edit'>
            <Form songToEdit={this.state.oneSong} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/home">
            <Homepage artist={this.state.artist} />
          </Route>
          <Route exact path='/allartist'>
            <AllArtist artist={this.state.artist} editArtist={(artist) => artist !== undefined ? this.editArtist(artist) : null} />
          </Route>
          <Route exact path='/edit'>
            <Form artistToEdit={this.state.oneArtist} />
          </Route>
        </Switch>
    </div>
  );
  }
}

export default App;
