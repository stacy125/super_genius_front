import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // This is where you will create a function where you will make a fetch call to your edit route from your api.
    //  You will save all the user input  in the state and then you will then send that user input data living in state to your API
    //
    // submitNewDog = (e) => {
    //     e.preventDefault()
    //     this.props.updateDog(this.props)
    // write fetch call using props.songToEdit and artistToEdit url end in api url for update
    // }


    render() {
        console.log('edit artist song inside form', this.props);
        return (
            <form className="form">
                <div className="form-container">
                    <div>
                        <label for="name">Name:</label>
                        <input className="input" name="name" placeholder={this.props.songToEdit.name} />
                    </div>
                    <div>
                        <label for="playcount">Playcount:</label>
                        <input className="input2" name="Playcount" placeholder={this.props.songToEdit.name} />
                    </div>
                    <div>
                        <label for="artist">Artist:</label>
                        <input className="input3" name="artist" placeholder={this.props.songToEdit.name} />
                    </div>
                    <div className="button">
                        <button className="update-dog">Update Song</button>
                    </div>
                    <div>
                        <label for="name">Name:</label>
                        <input className="input" name="name" placeholder={this.props.artistToEdit.name} />
                    </div>
                    <div>
                        <label for="playcount">Playcount:</label>
                        <input className="input2" name="Playcount" placeholder={this.props.artistToEdit.name} />
                    </div>
                    <div>
                        <label for="listener">Listener:</label>
                        <input className="input3" name="listener" placeholder={this.props.artistToEdit.name} />
                    </div>

                    <div className="button">
                        <button className="update-dog">Update Artist</button>
                    </div>
                </div>
            </form>
        );
    }
}