import React, {useState} from 'react';
import { updatePost } from '../api/adapters'
import { Link } from '@reach/router'

const PostPanel = (props) => {
    const { post, user_id } = props
    console.log(props)

    const [likes, setLikes] = useState(post.likes)
    const [dislikes, setDislikes] = useState(post.dislikes)


    const likeButton = () => {
        setLikes(1 + likes)
        updatePost(post, likes, dislikes, user_id)
        
    }

    const dislikeButton = () => {
        setDislikes(dislikes + 1)
    }

    return (
        <div className="card is-bold">
            <h1 className="card-header-title is-size-3">
                <br />
                <figure className="image is-64x64">
                    <Link to={`/profile/${post.user}`}><img alt="post-author" src={post.avatar} /></Link>
                </figure>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h1>
            <p className="card-header-title">By {post.user}</p>
            <div className="card-content">
                <p className="subtitle">{post.body}</p>
            </div>
        <footer>
            <button onClick={likeButton} className="button is-light is-large"><i className="far fa-thumbs-up" />: {likes}</button>
            <button onClick={dislikeButton} className="button is-light is-large"><i className="far fa-thumbs-down" />: {dislikes}</button>
        </footer>
        </div>
    )
}



export default PostPanel;