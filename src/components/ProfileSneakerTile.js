import React, {useState} from 'react';

const ProfileSneakerTile = (props) => {
    
    const [flipState, flipSneakerCard] = useState(false)
    
    const { sneaker } = props

    let id
    
    if (props.ownContainer) {
        id = sneaker.owned_sneaker_id
    } else {
        id = sneaker.wanted_sneaker_id
    }

    const showRemoveButton = () => {
        if (props.removeSneaker) {
            return (
              <p className="title is-size-6">
                {sneaker.title}
                <button
                  onClick={() => {
                    props.removeSneaker(id);
                  }}
                  className="button is-small is-danger removeSneakerButton"
                >
                  x
                </button>
              </p>
            );
        } else {
            return null
        }
    }






    
    const showCardFrontOrBack = () => {
        if (flipState) {  
            return (
            <div className="sneaker-back">
              <p>Model: {sneaker.shoe}</p>
              <p>MSRP: ${sneaker.retail_price}</p>
              <p>Release Date: {sneaker.release_date.substring(0, 10)}</p>
              <p>Style Code: {sneaker.style_id}
              </p>
              <button onClick={() => flipSneakerCard(!flipState)} className="button is-small is-danger flipCardButton"><i className="fas fa-undo"></i></button>
            </div>
            )
        } else {
            return (
                <div className="sneaker-front">
                    {showRemoveButton()}
                <figure className="image is128x128">
                    <img src={sneaker.img_url} alt={sneaker.title} />
                </figure>
                <p>{sneaker.colorway} <button onClick={() => flipSneakerCard(!flipState)} className="button is-small is-danger flipCardButton"><i className="fas fa-undo"></i></button></p>
            </div>
            )
        }
    }



    return (
        <div className={`sneaker ${flipState ? "isFlipped" : null}`}> 
            {showCardFrontOrBack()}
        </div>
    )
}


export default ProfileSneakerTile