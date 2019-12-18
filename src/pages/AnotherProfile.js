import React, {useState, useEffect} from 'react';
import { getAnotherUserProfile } from "../api/adapters";
import { LoginContext } from '../context/loginContext'
import { Redirect } from '@reach/router'
const AnotherProfile = (props) => {
    console.log(props)
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

    const renderOtherUserProfileorRedirectToYourProfile = () => {
        if (props.user === props.username) {
            return <Redirect to="/profile" noThrow/>
        } else {
            return (
                <div>
                    Another User Profile
                </div>
            )
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