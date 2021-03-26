import './App.css';
import { Component } from 'react';
// import Artist from './Artist.js';
// import Song from './Song.js';
import Navigation from './Navigation.js';
import AllSongs from './AllSongs.js'
import AllArtist from './AllArtist.js'
import Homepage from './Homepage.js'
import Form from './Form'
import { Switch, Route} from 'react-router-dom';



class App extends Component {
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
        console.log(data);
        this.setState({
          songs: data,
          Loading: false
        });
      });
 
    fetch('https://super-genius-back.herokuapp.com/artist')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState({
          artists: data,
          Loading: false
        });
      });
  }
  editSong = (songToEdit) => {
    console.log('edit song!', songToEdit)

    this.setState({ oneSong: songToEdit })
  }
  editArtist = (artistToEdit) => {
    console.log('edit artist', artistToEdit)

    this.setState({ oneArtist: artistToEdit })
  }

  render() {

    return (
    <div className="App" >
      <div className="app-box">
      <Navigation />
        <Switch>
          <Route exact path="/home">
            <Homepage songs={this.state.songs}  />
          </Route>
          <Route exact path='/allsongs'>
            <AllSongs songs={this.state.songs} editSong={(song) => song !== undefined ? this.editSong(song) : null} />
          </Route>
          <Route exact path='/edit'>
            <Form songToEdit={this.state.oneSong} artistToEdit={this.state.oneArtist}/>
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
