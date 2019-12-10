import React, { useState, useEffect, useRef } from "react";
import { fetchSneakerData, sneakerSearch } from "../api/adapters";
import  PaginationBar  from '../components/PaginationBar'
import SneakerTile from "../components/SneakerTile";
import { LoginContext } from "../context/loginContext";

import "../styles/Sneaker.css";
const Sneakers = (props) => {
  const [sneakers, setSneakers] = useState([]);
  const [value, setValues] = useState("");
  const sneakerGridRef = useRef(null)

  useEffect(() => {
    setSneakers([])
    window.scrollTo(0, 0)
    window.scrollTo({
      top: sneakerGridRef.current.scrollTo(0, 0)
    });
    fetchSneakerData(props.number)
      .then(r => r.json())
      .then(sneakers => setSneakers(sneakers.data));
  }, [props.number]);

  const handleInputChange = e => {
    const { value } = e.target;
    setValues(value);
  };

  const handleSearchForShoesSubmit = e => {
    e.preventDefault();
    if (!value) {
      return fetchSneakerData()
        .then(r => r.json())
        .then(sneakers => setSneakers(sneakers.data));
    } else {
      return sneakerSearch(value)
        .then(r => r.json())
        .then(sneakers => setSneakers(sneakers.data));
    }
  };

  const displaySneakers = () => {
    if (sneakers.length === 0) {
      return <div className="loader" />;
    } else {
      return sneakers.map(sneaker => {
        return (
          <LoginContext.Consumer key={sneaker.id}>
            {value => {
              return (
                <SneakerTile key={sneaker.id} sneaker={sneaker} {...value} />
              );
            }}
          </LoginContext.Consumer>
        );
      });
    }
  };
  return (
    <div ref={sneakerGridRef} className="sneakerpage">
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
            <button type="submit" className="button is-medium is-info">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="columns is-7 is-multiline container sneakergrid">
        {displaySneakers()}
        {sneakers.length > 0 ? <PaginationBar sneakerGridRef={sneakerGridRef} currentPageNumber={props.number} /> : null }
      </div>
    </div>
  );
};

export default Sneakers;
