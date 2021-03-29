import React, { Component } from 'react';

class song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: { ...props }
        };
    }

    render() {
        console.log(this.props.song[0]);
        return (
            <div>
                <div>
                    <h1>{this.props.song.name}</h1>
                </div>
                <div>
                    <header>SEARCH FOR YOUR FAVORITE SONG</header>
                    <h1>{this.props.song[0].name}</h1>
                    <p>Song {this.props.song[0].playcount}</p>
                    <div>
                        Artist
						<p>{this.props.song[0].artist}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default song;
