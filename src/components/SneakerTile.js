import React, {useState, useMemo, useCallback} from 'react'
import { LoginContext } from '../context/loginContext'
import { addToWant, addToOwn, getCurrentUser } from '../api/adapters'
const SneakerTile = (props) => {

    console.log(props)
    const { sneaker } = props
    const [owned, setOwnedState] = useState(false)
    const [wanted, setWantedState] = useState(false)
    
    




    const addToOwnButton = (shoeId, userId) => {
        addToOwn(shoeId, userId)
        setOwnedState(true)
    }

    const addToWantButton = (shoeId, userId) => {
        addToWant(shoeId, userId)
        setWantedState(true)
    }


    const renderButtonsForTile = () => {
        if (props.user_id && props.token) {
            return (
                <>
                <footer className="card-footer">
                    <button disabled={owned ? true : false} onClick={() => addToOwnButton(sneaker.id, props.user_id)}  className="button card-button is-medium is-danger">{owned ? "OWNED" : "OWN"}</button>
                    <button disabled={wanted ? true : false} onClick={() => addToWantButton(sneaker.id, props.user_id)}className="button card-button is-medium is-warning">{wanted ? "WANTED" : "WANT"}</button>
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



const SneakerTileWithContext = (props) => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <SneakerTile {...value} {...props} />
            }}
        </LoginContext.Consumer>
    )
}

export default SneakerTileWithContext;