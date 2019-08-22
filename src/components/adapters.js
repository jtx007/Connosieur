
const adapters = {
    pingHeroku: wakeHeroku,
    userCreate: postUserFetch,
    userLogin: postLoginFetch,
    allThreads: allThreads,
    getCurrentUser: fetchCurrentUserProfile,
    createThread: postThreadFetch,
    addToWant: postWantSneakers,
    addToOwn: postOwnSneakers,
    deleteFromOwn: deleteOwnSneakers,
    deleteFromWant: deleteWantSneakers,
    addComment: addComment,
    getAnotherUserProfile: fetchOtherUserDetails
}

export default adapters


function wakeHeroku() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/users/ping')
    .then(r => r.json())
    .then(data => console.log(data))
}


function postUserFetch(user){

    return fetch('https://connosieurbackend.herokuapp.com/api/v1/users', {
        method: "POST",
        body: JSON.stringify({user: {username: user.username, password: user.password, city: user.city, age: user.age, avatarUrl: user.avatar}}),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}


function postLoginFetch(user) {
    return fetch('https://connosieurbackend.herokuapp.com/user_token', {
        "method": "POST",
        "body": JSON.stringify({auth: {username: user.username, password: user.password}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}


function allThreads() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/posts')
}


function fetchCurrentUserProfile() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/users/me', {
        "method": "GET",
        "headers": {
            "Authorization": localStorage.token
        }
    })
    
}

function postThreadFetch(thread, id) {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/posts', {
        "method": "POST",
        "body": JSON.stringify({post: {title: thread.title, body: thread.body, user_id: id }}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })

}


function postWantSneakers(shoe_id, user) {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/want_sneakers', {
        "method": "POST",
        "body": JSON.stringify({want_sneaker:{user_id: user, sneaker_id: shoe_id}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application.json',
            "Authorization": localStorage.token
        }
    })
} 

function postOwnSneakers(shoe_id, user) {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/own_sneakers', {
        "method": "POST",
        "body": JSON.stringify({own_sneaker:{user_id: user, sneaker_id: shoe_id}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application.json',
            "Authorization": localStorage.token
        }
    })
}

function deleteOwnSneakers(id) {
    return fetch(`https://connosieurbackend.herokuapp.com/api/v1/own_sneakers/${id}`, {
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

function deleteWantSneakers(id) {
    return fetch(`https://connosieurbackend.herokuapp.com/api/v1/want_sneakers/${id}`,{
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

function addComment(user_id, post_id, comment) {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/comments', {
        "method": "POST",
        "body": JSON.stringify({comment: {text: comment, user_id: user_id, post_id: post_id }}),
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": localStorage.token
        }
    })
}

function fetchOtherUserDetails(user) {
    return fetch(`https://connosieurbackend.herokuapp.com/api/v1/users/${user}`)

}