import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "song"
        };

    }

    // This is where you will create a function where you will make a fetch call to your edit route from your api.
    //  You will save all the user input  in the state and then you will then send that user input data living in state to your API
    //
    // submitNewDog = (e) => {
    //     e.preventDefault()
    //     this.props.updateDog(this.props)
    // write fetch call using props.songToEdit and artistToEdit url end in api url for update
    // }
    componentDidMount() {
        // if (this.props !== undefined) {
        if (this.props.songToEdit !== undefined) {
            this.setState({
                form: "song"
            })
        } else if (this.props.artistToEdit !== undefined) {
            this.setState({
                form: "artist"
            })
        }
        // }
    }

    doSomething = (e) => {
        e.preventDefault()
        console.log("Hello");
    }



    render() {

        return (
            <form >
                {
                    this.state.form === "song" && this.props.songToEdit !== undefined
                        ?

                        <div className="form-container">
                            <div className="form">
                                <div>
                                    <label for="name">Name: </label>
                                    <div>
                                        <input className="input" name="name" placeholder={this.props.songToEdit.name} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label for="playcount">Playcount: </label>
                                    </div>
                                    <input className="input2" name="Playcount" placeholder={this.props.songToEdit.playcount} />
                                </div>
                                <div>
                                    <div>
                                        <label for="artist">Artist: </label>
                                    </div>
                                    <input className="input3" name="artist" placeholder={this.props.songToEdit.artist.name} />
                                </div>
                                <div className="button">
                                    <button className="update-button" onClick={(e) => { e.preventDefault(); console.log("hello") }}>Update Song</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="form-container">
                            <div className="form">
                                <div>
                                    <div>
                                        <label for="name">Name:</label>
                                    </div>
                                    <input className="input4" name="name" placeholder={this.props.artistToEdit.name} />
                                </div>
                                <div>
                                    <label for="playcount">Playcount:</label>
                                </div>
                                <input className="input5" name="Playcount" placeholder={this.props.artistToEdit.playcount} />
                                <div>
                                    <label for="url">URL:</label>
                                </div>
                                <input className="input6" name="url" placeholder={this.props.artistToEdit.url} />

                                <div className="button">
                                    <button className="update-button">Update Artist</button>
                                </div>
                            </div>
                        </div>
                }
            </form>
        );
    }
}