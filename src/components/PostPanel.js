import React, {useState} from 'react';
import { updatePost } from '../api/adapters'
import { Link } from '@reach/router'
import { LoginContext } from '../context/loginContext'

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
            <button disabled={props.user_id && props.token ? false : true}   onClick={likeButton}  className="button is-light is-large"><i className="far fa-thumbs-up" />: {postLikes}</button>
            <button disabled={props.user_id && props.token ? false : true} onClick={dislikeButton} className="button is-light is-large"><i className="far fa-thumbs-down" />: {postDislikes}</button>
        </footer>
        </div>
    )
}



const PostPanelWithLoginContext = (props) => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <PostPanel {...value} {...props} />
            }}
        </LoginContext.Consumer>

    )
}

export default PostPanelWithLoginContext;