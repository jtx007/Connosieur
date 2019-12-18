import React from 'react'
let token = ""
let user_id = ""
let avatar = ""
let user = ""

const defaultState = {
    token: token,
    user_id: user_id,
    avatar: avatar,
    user: user,
    setToken: () => {},
    setUserId: () => {},
    setAvatar: () => {},
    setUser: () => {}
}

export const LoginContext = React.createContext(defaultState)