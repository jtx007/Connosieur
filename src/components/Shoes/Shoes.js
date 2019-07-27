import React, { Component, Fragment } from 'react';
import ShoeCard from '../ShoeCard/ShoeCard'
import Preloader from '../Preloader'
import PaginationBar from '../PaginationBar'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"

export default class Shoes extends Component {

    state = {
        shoes: [],
        loading: true,
        term: ''
    }

    componentDidMount() {
        fetch('https://connosieurbackend.herokuapp.com/api/v1/sneakers')
        .then(r => r.json())
        .then(shoes => this.setState({shoes: shoes.data}))
        .then(() => this.setState({
            loading: false
        }))
    }


    genCards = (shoes) => {
        return shoes.map(shoe => {
            return <ShoeCard showButtons={true} id={shoe.id} shoe={shoe.attributes} key={shoe.id} />
        })
    }

    searchForShoes = (event) => {
        event.preventDefault()
        if (!this.state.term) {
            return fetch('https://connosieurbackend.herokuapp.com/api/v1/sneakers')
            .then(r => r.json())
            .then(shoes => this.setState({shoes: shoes.data}))
        } else {
            return fetch(`https://connosieurbackend.herokuapp.com/api/v1/sneakers?filter=${this.state.term}`)
            .then( r => r.json())
            .then(shoes => this.setState({shoes: shoes.data}))
        }
    } 



    handleChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }



    render() {
        
        return (
            <div className="shoe-page">
            <form className="shoe-search" onSubmit={this.searchForShoes}>
            <div className="shoe-search input-field col 6">
            <p><input placeholder="Search Shoes here" onChange={this.handleChange} value={this.state.term} /> 
            <button type="submit">Search</button></p>
            </div>
            </form>
            <div className="shoe-container">
            {this.state.loading ? <Preloader className="preloader" />
               : this.genCards(this.state.shoes)
            }
            
            </div>
            {this.state.loading? null : 
            <Fragment>
            <PaginationBar/>
            <ScrollUpButton ContainerClassName="btn-floating btn-large red " />
            </Fragment>}
            </div>
            
        )
    }
}