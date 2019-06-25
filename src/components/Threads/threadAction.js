
const threadAction = (data) => {
    return {
        type: 'GET_THREADS',
        payload: data
    }
}

export default threadAction