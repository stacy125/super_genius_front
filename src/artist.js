import React, { Component } from 'react';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: { ...props }
        };
    }

    render() {
        console.log(this.props.artist[0]);
        return (
            <div>
                <div>
                    <h1>{this.props.artist.name}</h1>
                </div>
                <div>
                    <header>SEARCH FOR YOUR FAVORITE ARTIST</header>
                    <h1>{this.props.artist[0].name}</h1>
                    <p>Life Span {this.props.artist[0].playcount}</p>
                    <div>
                        Temperament
						<p>{this.props.artist[0].url}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Artist;

