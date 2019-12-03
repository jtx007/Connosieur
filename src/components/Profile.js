import React, {useState, useEffect} from 'react'
import { LoginContext } from '../context/loginContext'
import { Redirect } from '@reach/router'
import { getCurrentUser } from '../api/adapters'
import "../styles/Profile.css"

const Profile = ({token, user_id}) => {


    const [userProfile, setUserProfile] = useState({username: '', city: '', age: '', avatarUrl: '', ownedSneakers: [], wantedSneakers: []})

    useEffect(() => {
        getCurrentUser()
        .then(r => r.json())
        .then(data => setUserProfile({ username: data.username, city: data.city, age: data.age, avatarUrl: data.avatarUrl, ownedSneakers: data.owned_sneakers, wantedSneakers: data.wanted_sneakers}))
    }, [])


    const renderProfileOrRedirect = () => {
        if (!token || !user_id) {
            return <Redirect to="/" noThrow/>
        } else {
            return (
                <div>
                    <h1>Welcome {userProfile.username}</h1>
                    <img src={userProfile.avatarUrl} alt="icon" />
                    <p>{userProfile.city}</p>
                    <p>{userProfile.age}</p>
                </div>
            )
        }
    }

    console.log(userProfile)


    return (
        <div className="profile">
            {renderProfileOrRedirect()}
        </div>
    )
}



const ProfileWithContext = () => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <Profile {...value} />
            }}
        </LoginContext.Consumer>
    )
}

export default ProfileWithContext;