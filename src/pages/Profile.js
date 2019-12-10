import React, { useState, useEffect } from "react";
import { LoginContext } from "../context/loginContext";
import { Redirect } from "@reach/router";
import { getCurrentUser, deleteFromOwn, deleteFromWant } from "../api/adapters";
import ProfileSneakerTile from "../components/ProfileSneakerTile";
import "../styles/Profile.css";

const Profile = ({ token, user_id }) => {
  const [userProfile, setUserProfile] = useState({
    username: "",
    city: "",
    age: "",
    avatarUrl: "",
    ownedSneakers: [],
    wantedSneakers: []
  });

  const [tabOwnActiveState, setOwnTabActiveState] = useState(true)
  const [tabWantActiveState, setWantTabActiveState] = useState(false)

  console.log(userProfile)
  useEffect(() => {
    getCurrentUser()
      .then(r => r.json())
      .then(data =>
        setUserProfile({
          username: data.username,
          city: data.city,
          age: data.age,
          avatarUrl: data.avatarUrl,
          ownedSneakers: data.owned_sneakers,
          wantedSneakers: data.wanted_sneakers
        })
      );
  }, []);
  

  const showOwnOrWant = () => {
    if (tabOwnActiveState) {
      return displayOwnedSneakers()
    } else {
      return displayWantedSneakers()
    }
  }

  const displayOwnedSneakers = () => {
    if (userProfile.ownedSneakers) {
      return userProfile.ownedSneakers.map(sneaker => {
        return <ProfileSneakerTile ownContainer={true} removeSneaker={removeFromOwn} sneaker={sneaker} key={sneaker.owned_sneaker_id}/>;
      });
    }
  };

  const displayWantedSneakers = () => {
    if (userProfile.wantedSneakers) {
      return userProfile.wantedSneakers.map(sneaker => {
        return <ProfileSneakerTile wantContainer={true} removeSneaker={removeFromWant}  sneaker={sneaker} key={sneaker.wanted_sneaker_id}/>;
      });
    }
  };

  const filterByOwnId = (id) => {
    return userProfile.ownedSneakers.filter((sneaker) => {
      if (sneaker.owned_sneaker_id !== id) {
        return sneaker
      }
    })
  }

  const filterByWantId = (id) => {
    return userProfile.wantedSneakers.filter((sneaker) => {
      if (sneaker.wanted_sneaker_id !== id) {
        return sneaker;
      }
    });
  };

  const removeFromOwn = (id) => {
    deleteFromOwn(id)
    .then(r => r.json())
    .then(() => {
      setUserProfile({...userProfile, ownedSneakers: filterByOwnId(id)})
    })
  }

  

  const removeFromWant = (id) => {
    deleteFromWant(id)
    .then(r => r.json())
    .then(() => {
      setUserProfile({...userProfile, wantedSneakers: filterByWantId(id)})
    })
    
  }

  const renderProfileOrRedirect = () => {
    if (!token || !user_id) {
      return <Redirect to="/" noThrow />;
    } else {
      return (
        <>
          <br />
          <section className="hero section  is-bold main-header">
            <div className="hero body">
              <h1 className="title">Welcome {userProfile.username}</h1>
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={userProfile.avatarUrl}
                  alt="icon"
                />
              </figure>
              <br />
              <h1 className="subtitle">{userProfile.city}</h1>
              <h1 className="subtitle">{userProfile.age}</h1>
            </div>
          </section>
          <br />
          <div className="sneakerCollectionContainer">
            <div className="collectionTabs">
              <button
                onClick={prevState => {
                  setOwnTabActiveState(!prevState.tabOwnActiveState)
                  setWantTabActiveState(false)
                }
                }
                className={`button is-large is-light tab ${tabOwnActiveState ? "is-dark" : null}`}
              >
                Own
              </button>
              <button onClick={prevState => {
                setWantTabActiveState(!prevState.tabWantActiveState)
                setOwnTabActiveState(false)
                }
                } className={`button is-large is-light tab ${tabWantActiveState ? "is-dark" : null}`}>Want</button>
            </div>
            <div className="sneakerContainer multiline">
              {showOwnOrWant()}

            </div>
          </div>
        </>
      );
    }
  };


  return <div className="profile">{renderProfileOrRedirect()}</div>;
};

const ProfileWithContext = () => {
  return (
    <LoginContext.Consumer>
      {value => {
        return <Profile {...value} />;
      }}
    </LoginContext.Consumer>
  );
};

export default ProfileWithContext;
