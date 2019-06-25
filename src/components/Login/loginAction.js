
const loginAction = (user) => {
    
    return {
        type: 'LOGIN_USER',
        user
    }
}

export default loginAction