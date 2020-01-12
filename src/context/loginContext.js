import React from 'react'
let token = ""
let user_id = ""
let avatar = ""
let user = ""
let ownedCollection = []
let wantedCollection = []

const defaultState = {
    token: token,
    user_id: user_id,
    avatar: avatar,
    user: user,
    ownedCollection: ownedCollection,
    wantedCollection: wantedCollection,
    setToken: () => {},
    setUserId: () => {},
    setAvatar: () => {},
    setUser: () => {},
    setOwnedCollection: () => {},
    setWantedCollection: () => {}
}

export const LoginContext = React.createContext(defaultState)