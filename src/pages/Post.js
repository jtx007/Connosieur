import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router'
import { fetchSinglePost, addComment } from '../api/adapters'
import { LoginContext } from '../context/loginContext' 
import Comment from '../components/Comment'
import '../styles/Post.css'
import { Signer } from 'crypto';

const Post = (props) => {

    
    
    const [singlePost, setPost] = useState({avatar: "", title: "", body: "", comments: [], user: "", user_id: ""})
    const [commentValue, setCommentValue] = useState("")
    
    useEffect(() => {
        fetchSinglePost(props.number)
        .then(r => r.json())
        .then(data => setPost({
            avatar: data.avatar,
            title: data.title,
            body: data.body,
            comments: data.comments,
            user: data.user,
            user_id: data.user_id
        }))
    }, [props.number])

    const handleInputChange = e => {
      const { value } = e.target;
      setCommentValue(value);
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log("form submit")
        addComment(props.user_id, props.number, commentValue)
        .then(() => {
            let newComments = singlePost.comments
            newComments.push({avatar: props.avatar, text: commentValue,  user: props.user})
            setPost({...singlePost, comments: newComments})
        })
        
    }

    const displayComments = () => {
        if (singlePost.comments) {
            return singlePost.comments.map(comment => {
                return <Comment key={comment.id} comment={comment} />
            })
        } else {
            return <h1>No comments for this post</h1>
        }
    }



    return (
        <div className="post section container">
           <div className="card">
                <h1 className="title">{singlePost.title}</h1>
                <figure className="image is-64x64">
                    <Link to={`/profile/${singlePost.user}`}><img alt="post-author-icon" src={singlePost.avatar} /></Link>
                </figure>
                <p className="subtitle">By {singlePost.user}</p>
                <p>{singlePost.body}</p>
           </div>
           <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                    <Link to="/profile"><img alt="current-user-icon" src={props.avatar} /></Link>
                    </p>
                </figure>
                <div className="media-content">
                    <form onSubmit={handleSubmit}>
                    <div className="field">
                    <p className="control">
                        <textarea
                        required
                        value={commentValue}
                        onChange={handleInputChange}
                         className="textarea" placeholder="Add a comment..."></textarea>
                    </p>
                    </div>
                    <div className="level-left">
                        <div className="level-item">
                        <button type="submit" className="button is-info">Submit</button>
                        </div>
                    </div>
                    </form>
                   
                </div>
                </article>
                {displayComments()}
        </div>
    )
}

const PostWithContext = (props) => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <Post {...value} {...props} />
            }}
        </LoginContext.Consumer>
    )
}

export default PostWithContext;