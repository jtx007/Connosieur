
const profileAction = (data) => {
    return {
        type: 'GET_DIFFERENT_USER_PROFILE',
        payload: data
    }
}

export default profileAction