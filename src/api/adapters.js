
const baseURL = "http://localhost:3000";


export function pingHeroku() {
    return fetch(`${baseURL}/api/v1/users/ping`)
    .then(r => r.json())
    .then(data => console.log(data))
}


export function userCreate(user){

    return fetch(`${baseURL}/api/v1/users`, {
        method: "POST",
        body: JSON.stringify({user: {username: user.username, password: user.password, city: user.city, age: user.age, avatarUrl: user.avatar, bio: user.bio}}),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}


export function userLogin(user) {
    return fetch(`${baseURL}/user_token`, {
        "method": "POST",
        "body": JSON.stringify({auth: {username: user.username, password: user.password}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}


export function allPosts() {
    return fetch(`${baseURL}/api/v1/posts`)
}

export function fetchSinglePost(postID) {
    return fetch(`${baseURL}/api/v1/posts/${postID}`)
}

export function getCurrentUser() {
    return fetch(`${baseURL}/api/v1/users/me`, {
        "method": "GET",
        "headers": {
            "Authorization": localStorage.token
        }
    })
    
}

export function createPost(post, userId) {
    return fetch(`${baseURL}/api/v1/posts`, {
        "method": "POST",
        "body": JSON.stringify({post: {title: post.title, body: post.body, user_id: userId }}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

export function updatePost(post, likes, dislikes, userId) {
    
    return fetch(`${baseURL}/api/v1/posts/${post.id}`, {
        "method": "PATCH",
        "body": JSON.stringify({post: {title: post.title, body: post.body, user_id: userId, likes: likes, dislikes: dislikes}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    });
}


export function addToWant(shoeId, userId) {
    return fetch(`${baseURL}/api/v1/want_sneakers`, {
        "method": "POST",
        "body": JSON.stringify({want_sneaker:{user_id: userId, sneaker_id: shoeId}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application.json',
            "Authorization": localStorage.token
        }
    })
} 

export function addToOwn(shoeId, userId) {
    return fetch(`${baseURL}/api/v1/own_sneakers`, {
        "method": "POST",
        "body": JSON.stringify({own_sneaker:{user_id: userId, sneaker_id: shoeId}}),
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application.json',
            "Authorization": localStorage.token
        }
    })
}

export function deleteFromOwn(id) {
    return fetch(`${baseURL}/api/v1/own_sneakers/${id}`, {
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

export function deleteFromWant(id) {
    return fetch(`${baseURL}/api/v1/want_sneakers/${id}`,{
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": localStorage.token
        }
    })
}

export function addComment(user_id, post_id, comment) {
    return fetch(`${baseURL}/api/v1/comments`, {
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
    return fetch(`${baseURL}/api/v1/users/?username=${user}`)

}


export function fetchSneakerData(page=1) {
    return fetch(`${baseURL}/api/v1/sneakers?page=${page}`)
}

export function sneakerSearch(term) {
    return fetch(`${baseURL}/api/v1/sneakers?filter=${term}`);
}