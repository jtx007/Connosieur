import React from 'react'
import { addToWant, addToOwn} from '../api/adapters'
const SneakerTile = (props) => {
    const { sneaker } = props


    const addToOwnButton = (shoeId, userId) => {
        addToOwn(shoeId, userId)
    }

    const addToWantButton = (shoeId, userId) => {
        addToWant(shoeId, userId)
    }

    const renderButtonsForTile = () => {
        if (props.user_id && props.token) {
            return (
                <>
                <footer className="card-footer">
                    <button onClick={() => addToOwnButton(sneaker.id, props.user_id)}  className="button card-button is-medium is-danger">OWN</button>
                    <button  onClick={() => addToWantButton(sneaker.id, props.user_id)}className="button card-button is-medium is-warning">WANT</button>
                </footer>
                </>
            )
        } else {
            return (
                <>
                </>
            ) 
        }
    }

    return (
        <div className="card column is-one-quarter">
            <header className="title is-size-6">
                    {sneaker.attributes.title}
            </header>
            <figure>
                <img className="image sneakerImg" src={sneaker.attributes['img-url']} alt={sneaker.attributes.title} />
            </figure>
            <div className="card-content">
                <div className="content">
                <p>Style Code: {sneaker.attributes['style-id']}</p>
                <p>Colorway: {sneaker.attributes.colorway}</p>
                <br />
                </div>
            </div>
            {renderButtonsForTile()}
        </div>
    )
}



export default SneakerTile;