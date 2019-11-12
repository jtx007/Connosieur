



export function pingHeroku() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/users/ping')
    .then(r => r.json())
    .then(data => console.log(data))
}


export function userCreate(user){

    return fetch('https://connosieurbackend.herokuapp.com/api/v1/users', {
        method: "POST",
        body: JSON.stringify({user: {username: user.username, password: user.password, city: user.city, age: user.age, avatarUrl: user.avatar}}),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}


export function userLogin(user) {
    return fetch('https://connosieurbackend.herokuapp.com/user_token', {
        "method": "POST",
        "body": JSON.stringify({auth: {username: user.username, password: user.password}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}


export function allThreads() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/posts')
}


export function getCurrentUser() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/users/me', {
        "method": "GET",
        "headers": {
            "Authorization": localStorage.token
        }
    })
    
}

export function createThread(thread, id) {
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


export function addToWant(shoe_id, user) {
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

export function addToOwn(shoe_id, user) {
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

export function deleteFromOwn(id) {
    return fetch(`https://connosieurbackend.herokuapp.com/api/v1/own_sneakers/${id}`, {
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

export function deleteFromWant(id) {
    return fetch(`https://connosieurbackend.herokuapp.com/api/v1/want_sneakers/${id}`,{
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

export function addComment(user_id, post_id, comment) {
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

export function getAnotherUserProfile(user) {
    return fetch(`https://connosieurbackend.herokuapp.com/api/v1/users/${user}`)

}


export function fetchSneakerData() {
    return fetch('https://connosieurbackend.herokuapp.com/api/v1/sneakers')
}