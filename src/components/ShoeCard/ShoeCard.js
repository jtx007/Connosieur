import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import adapters from '../adapters'

class ShoeCard extends Component {

    state = {
        clicked: false
    }

    wantButtonClick = (e) => {
        e.preventDefault() 
        adapters.addToWant(this.props.id, this.props.user_id)

    }

    ownButtonClick = (e) => {
        e.preventDefault()
        adapters.addToOwn(this.props.id, this.props.user_id)
    }


    removeShoe = (e) => {
        if (this.props.type === 'own') { 
        adapters.deleteFromOwn(this.props.shoe.owned_sneaker_id)
        .then(() => this.props.getCurrentUser())
        } else if (this.props.type === 'want') {
            adapters.deleteFromWant(this.props.shoe.wanted_sneaker_id)
            .then(() => this.props.getCurrentUser())
        } else {
            return null
        }
    }

    removeFromWant = () => {
        adapters.deleteFromWant(this.props.wanted_sneaker_id)
        .then(() => this.props.getCurrentUser())
    }

    render() {
        const { shoe } = this.props
        return (
        
            <span className="row shoe-card">
            <div className="col s12 m4">
                <div className="card small">
                <div className="card-image">
                    <img className="shoe-pic" alt={shoe.uuid} src={shoe['img-url'] || shoe.img_url}/>
                    <span className="card-title"></span>
                </div>
                <div className="card-content">
                    <p>Name: {shoe.title}</p>
                    <p>Model: {shoe.shoe}</p>
                    <p>Colorway: {shoe.colorway}</p>
                    <p>Release Date: {shoe['release-date'] || shoe.release_date}</p>
                    <p>Retail Price: ${shoe['market-value'] || shoe.market_value}</p>
                    
                </div>
                <div className="card-action">
                {this.props.loggedIn && this.props.showButtons ? 
                <Fragment>
                    <button className="waves-effect waves-red btn-small" onClick={this.ownButtonClick}>OWN</button>
                    <button className= "waves-effect waves-red btn-small"
                    onClick = {this.wantButtonClick} > WANT </button>
                </Fragment> :
                <button onClick={this.removeShoe} className="waves-effect waves-light btn-small">X</button>

                }
        
                </div>
                </div>
            </div>
            </span>
            )
        
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login_user.loggedIn,
        user_id: state.login_user.current_user.id
    }
}

export default connect(mapStateToProps)(ShoeCard)