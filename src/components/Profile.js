import React, {useState, useEffect} from 'react'
import { LoginContext } from '../context/loginContext'
import { Redirect } from '@reach/router'


const Profile = ({token, user_id}) => {

    const renderProfileOrRedirect = () => {
        if (!token || !user_id) {
            return <Redirect to="/" noThrow/>
        } else {
            return (
                <div>
                    User Profile
                </div>
            )
        }
    }



    return (
        <>
            {renderProfileOrRedirect()}
        </>
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