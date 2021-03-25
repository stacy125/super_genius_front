import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <div>
            <ul className="link">
                <div>
                    <Link className="home" to="/home">Home</Link>
                </div>
                <div>
                    <Link className="allsongs" to='/allsongs'>All songs</Link>
                </div>
                <div>
                    <Link className="allartist" to='/allartist'>All artist</Link>
                </div>
            </ul>
        </div>
    )
}

export default Navigation
