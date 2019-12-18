import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router'
import { fetchSinglePost, addComment, updatePost } from '../api/adapters'
import { LoginContext } from '../context/loginContext' 
import Comment from '../components/Comment'
import '../styles/Post.css'

const Post = (props) => {

    
    
    const [singlePost, setPost] = useState({id: "", avatar: "", title: "", body: "", comments: [], user: "", user_id: "", likes: 0, dislikes: 0})
    const [commentValue, setCommentValue] = useState("")

    

    useEffect(() => {
        fetchSinglePost(props.number)
        .then(r => r.json())
        .then(data => setPost({
            id: data.id,
            avatar: data.avatar,
            title: data.title,
            body: data.body,
            comments: data.comments,
            user: data.user,
            user_id: data.user_id,
            likes: data.likes,
            dislikes: data.dislikes
        }))
    }, [props.number])
    
    const likeButton = () => {
      const newLikes = singlePost.likes;
      const post = {title: singlePost.title, body: singlePost.body, id: singlePost.id}
      setPost({...singlePost, likes: newLikes + 1});
      updatePost(post, newLikes + 1, singlePost.dislikes, singlePost.user_id);
    };

    const dislikeButton = () => {
      const newDisLikes = singlePost.dislikes;
      const post = { title: singlePost.title, body: singlePost.body, id: singlePost.id };
      setPost({...singlePost, dislikes: newDisLikes + 1});
      updatePost(post, singlePost.likes, newDisLikes + 1, singlePost.user_id);
    };
    
    const handleInputChange = e => {
      const { value } = e.target;
      setCommentValue(value);
    };

    const handleSubmit = e => {
        e.preventDefault()
        addComment(props.user_id, props.number, commentValue)
        .then(() => {
            let newComments = singlePost.comments
            newComments.push({avatar: props.avatar, text: commentValue,  user: props.user})
            setPost({...singlePost, comments: newComments})
        })
        setCommentValue("")
        
    }

    const displayComments = () => {
        if (singlePost.comments) {
            return singlePost.comments.map(comment => {
                return <Comment key={comment.id ? comment.id : "temp"} comment={comment} />
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
                 <button onClick={likeButton} className="button is-light is-medium"><i className="far fa-thumbs-up" />: {singlePost.likes}</button>
                 <button onClick={dislikeButton} className="button is-light is-medium"><i className="far fa-thumbs-down" />: {singlePost.dislikes}</button>
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