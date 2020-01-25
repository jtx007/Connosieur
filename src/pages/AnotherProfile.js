import React, {useState, useEffect} from 'react';
import { getAnotherUserProfile } from "../api/adapters";
import { LoginContext } from '../context/loginContext'
import ProfileSneakerTile from '../components/ProfileSneakerTile'
import { Redirect } from '@reach/router'
const AnotherProfile = (props) => {
    const [userProfile, setUserProfile] = useState({
      username: "",
      city: "",
      age: "",
      bio: "",
      avatarUrl: "",
      ownedSneakers: [],
      wantedSneakers: [],
      posts: [],
      comments: []
    });  
    const [tabOwnActiveState, setOwnTabActiveState] = useState(true);
    const [tabWantActiveState, setWantTabActiveState] = useState(false);

    useEffect(() => {
        getAnotherUserProfile(props.username)
          .then(r => r.json())
          .then(data =>
            setUserProfile({
              username: data.username,
              city: data.city,
              age: data.age,
              bio: data.bio,
              avatarUrl: data.avatarUrl,
              ownedSneakers: data.owned_sneakers,
              wantedSneakers: data.wanted_sneakers,
              posts: data.posts,
              comments: data.comments
            })
          );
    }, [props.username])


    const displayPostsActivity = () => {
      return userProfile.posts.map(post => {
        return (
          <li className="recent-activity-list">
            <strong>Post:</strong> {post.title}
          </li>
        );
      });
    };

    const displayCommentsActivity = () => {
      return userProfile.comments.map(comment => {
        return (
          <li>
            <strong>Comment:</strong> "{comment.text}"
          </li>
        );
      });
    };

    const showOwnOrWant = () => {
      if (tabOwnActiveState) {
        return displayOwnedSneakers();
      } else {
        return displayWantedSneakers();
      }
    };

    const displayOwnedSneakers = () => {
      if (userProfile.ownedSneakers.length > 0) {
        return userProfile.ownedSneakers.map(sneaker => {
          return (
            <ProfileSneakerTile
              ownContainer={true}
              sneaker={sneaker}
              key={sneaker.owned_sneaker_id}
            />
          );
        });
      } else {
        return <div className="title is-warning">No current owned</div>;
      }
    };

    const displayWantedSneakers = () => {
      if (userProfile.wantedSneakers.length > 0) {
        return userProfile.wantedSneakers.map(sneaker => {
          return (
            <ProfileSneakerTile
              wantContainer={true}
              sneaker={sneaker}
              key={sneaker.wanted_sneaker_id}
            />
          );
        });
      } else {
        return <div className="title is-warning">No current wants</div>;
      }
    };

    const renderOtherUserProfileorRedirectToYourProfile = () => {
        if (props.user === props.username) {
            return <Redirect to="/profile" noThrow/>
        } else {
            return (
              <>
                <br />
                <div className="top-two">
                  <section className="main-header">
                    <div className="hero body">
                      <div className="section1">
                        <h1 className="title is-size-1">
                          {userProfile.username}
                        </h1>
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            src={userProfile.avatarUrl}
                            alt="icon"
                          />
                        </figure>
                        <br />
                        <h1 className="subtitle location-subtitle">
                          <i className="fas fa-map-marker-alt location-icon">
                            <br />
                          </i>
                          {userProfile.city}
                        </h1>
                        <h1 className="subtitle">{userProfile.age}</h1>
                      </div>
                    </div>
                    <p className="title is-size-5 personalBio">
                      "{userProfile.bio}..."
                    </p>
                  </section>
                  <section className="second-header">
                    <div className="hero body">
                      <h1 className="title">Recent Activity</h1>
                      <ul className="recent-activity-list">
                        {displayPostsActivity()}
                        {displayCommentsActivity()}
                      </ul>
                    </div>
                  </section>
                </div>
                <br />
                <div className="sneakerCollectionContainer">
                  <div className="collectionTabs">
                    <div
                      onClick={prevState => {
                        setOwnTabActiveState(!prevState.tabOwnActiveState);
                        setWantTabActiveState(false);
                      }}
                      className={`is-large is-light tab ${
                        tabOwnActiveState ? "selectedTab" : null
                      }`}
                    >
                      <i className="fas fa-key tabIcon"></i>
                      Own
                    </div>
                    <div
                      onClick={prevState => {
                        setWantTabActiveState(!prevState.tabWantActiveState);
                        setOwnTabActiveState(false);
                      }}
                      className={`is-large is-light tab ${
                        tabWantActiveState ? "selectedTab" : null
                      }`}
                    >
                      <i className="fas fa-shopping-cart tabIcon"></i>
                      Want
                    </div>
                  </div>
                  <div className="sneakerContainer multiline">
                    {showOwnOrWant()}
                  </div>
                </div>
              </>
            );
        }
    }

    return (
        <div>
            {renderOtherUserProfileorRedirectToYourProfile()}
        </div>
    )
}

const AnotherProfileWithContext = (props) => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <AnotherProfile {...value} {...props} />
            }}
        </LoginContext.Consumer>
    )
}

export default AnotherProfileWithContext;