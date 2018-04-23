import React from 'react'
import './App.css'
import IndexComponent from '../Router/router'

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <IndexComponent />
            </div>
        );
    }
}

export default HelloMessage