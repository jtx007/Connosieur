import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    new_user: create_user,
    login_user: log_status,
    threads: threads,
    getAnotherUser: getAnotherUser 
    
})

export default rootReducer 

function create_user(state = { users: []}, action){
    const { user } = action
    
    switch (action.type) {
        case 'CREATE_USER':
        return {
            users: [...state.users, user]
        }     
        default:
            return state
    }
} 


function log_status(state = {
    loggedIn: localStorage.token ? true : false, 
    current_user: {attributes: {}}, 
    included: []
} , action){

    switch (action.type) {
        case 'LOGIN_USER':
            const stuff = {
                current_user: {attributes: {}},
                loggedIn: true
            }
            console.log(stuff)
            return stuff
        case 'LOG_OUT':
            localStorage.clear()
            return {
                current_user: {attributes: {}},
                loggedIn: false
            } 
        case 'GET_USER':
            return {
                ...state,
                current_user: action.payload,
                included: action.payload.included || []
            }      
        default:
            return state
    }
}

function threads(state = { threads: []}, action) {
    switch (action.type) {
        case 'GET_THREADS':
            return {
                threads: action.payload 
            }
            
        default:
            return state
    }
}

function getAnotherUser(state = {user: ''}, action) {
    switch (action.type) {
        case 'GET_DIFFERENT_USER_PROFILE':
            return {
                user: action.payload
            }
            
    
        default:
            return state
    }
} 
