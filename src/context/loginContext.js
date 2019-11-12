import React from 'react'
let token = ""
let user_id = ""

const defaultState = {
    token: token,
    user_id: user_id,
    setToken: () => {},
    setUser: () => {}
}

export const LoginContext = React.createContext(defaultState)