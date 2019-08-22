import React, { Component } from 'react';
import adapters from '../adapters'

export default class Home extends Component {

    componentDidMount() {
        adapters.pingHeroku()
    }

    render() {
        return (
            <div className="Home">
                <h3 className="app-header">A place for sneaker enthusiasts to talk shop</h3>
            </div> 
        )

    }
}