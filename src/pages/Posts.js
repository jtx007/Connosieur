import React, {useState, useEffect} from 'react';
import { allPosts } from '../api/adapters'
import { LoginContext } from '../context/loginContext'
import { Link } from '@reach/router'
import PostPanel from '../components/PostPanel'
import '../styles/Posts.css'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        allPosts()
        .then(r => r.json())
        .then(data => setPosts(data))
    }, [])

    const renderPosts = () => {
        return posts.map(post => {
            return <PostPanel key={post.id} post={post} />
        })
    }

    return (
        <div className="container posts">
            <h1 className="title"><Link to="/posts/new"><i className="fas fa-edit"></i></Link></h1>
            {renderPosts()}
        </div>
    )
}

const PostsWithContext = () => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <Posts {...value} />
            }}
        </LoginContext.Consumer>
    )
}

export default PostsWithContext;

