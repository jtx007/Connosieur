import React, {useState, useEffect} from 'react'
import { fetchSneakerData } from '../api/adapters'
import SneakerTile from './SneakerTile'
import { LoginContext } from "../context/loginContext";

import '../styles/Sneaker.css'
const Sneakers = () => {

    const [sneakers, setSneakers] = useState([])


    useEffect(() => {
        fetchSneakerData()
        .then(r => r.json())
        .then(sneakers => setSneakers(sneakers.data))
    },[])

    const displaySneakers = () => {
        return sneakers.map(sneaker => {
            return (
                <LoginContext.Consumer key={sneaker.id}>
                    {value => {
                        return <SneakerTile key={sneaker.id} sneaker={sneaker} {...value}/>
                    }}
                </LoginContext.Consumer>
            ) 
        })
    }
    return (
        <div className="sneakerpage">
            <form className="container">
                <div className="field has-addons">
                    <div className="control has-icons-left">
                        <input
                        className="input is-medium is-info"
                        type="text"
                        name="sneaker"
                        />
                        <span className="icon is-small is-left">
                            <i className="fab fa-searchengin"></i>
                        </span>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-medium is-info">Search</button>
                    </div>
                </div> 
            </form>
                    
                    <div className="columns is-7 is-multiline container sneakergrid">
                            {displaySneakers()}
                    </div>

        </div>
    )
}

export default Sneakers