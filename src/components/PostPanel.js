import React, {useState, useRef} from 'react';
import { updatePost } from '../api/adapters'
import { Link } from '@reach/router'

const PostPanel = (props) => {
    const { post, user_id } = props


    const [postLikes, setLikes] = useState(post.likes)
    const [postDislikes, setDislikes] = useState(post.dislikes)

   

    


    const likeButton = () => {
        const newLikes = postLikes
        setLikes(newLikes + 1)
        updatePost(post, newLikes + 1, postDislikes, user_id)
        
    }

    const dislikeButton = () => {
       const newDisLikes = postDislikes
       setDislikes(newDisLikes + 1)
       updatePost(post, postLikes, newDisLikes + 1, user_id)
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
            <button   onClick={likeButton}  className="button is-light is-large"><i className="far fa-thumbs-up" />: {postLikes}</button>
            <button  onClick={dislikeButton} className="button is-light is-large"><i className="far fa-thumbs-down" />: {postDislikes}</button>
        </footer>
        </div>
    )
}



export default PostPanel;