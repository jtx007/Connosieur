import React from 'react'

const SneakerTile = (props) => {
    const { sneaker } = props
    console.log(sneaker)

    const renderButtonsForTile = () => {
        if (props.user_id && props.token) {
            return (
                <>
                <footer className="card-footer">
                    <button  className="button card-button is-medium is-danger">OWN</button>
                    <button  className="button card-button is-medium is-warning">WANT</button>
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