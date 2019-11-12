import React, {useState, useEffect} from 'react'
import { fetchSneakerData, sneakerSearch } from '../api/adapters'
import SneakerTile from './SneakerTile'
import { LoginContext } from "../context/loginContext";

import '../styles/Sneaker.css'
const Sneakers = () => {

    const [sneakers, setSneakers] = useState([])
    const [value, setValues] = useState("");

    

    useEffect(() => {
        fetchSneakerData()
        .then(r => r.json())
        .then(sneakers => setSneakers(sneakers.data))
    },[])

    const handleInputChange = e => {
      const { value } = e.target;
      setValues(value);
      console.log(value)
    };

    const handleSearchForShoesSubmit = e => {
        e.preventDefault()
        if (!value) {
            return fetchSneakerData()
            .then(r => r.json())
            .then(sneakers => setSneakers(sneakers.data))
        } else {
            return sneakerSearch(value)
            .then(r => r.json())
            .then(sneakers => setSneakers(sneakers.data))
        }
    }

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
            <form onSubmit={handleSearchForShoesSubmit} className="container">
                <div className="field has-addons">
                    <div className="control has-icons-left">
                        <input
                        onChange={handleInputChange}
                        className="input is-medium is-info"
                        value={value}
                        type="text"
                        name="input"
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