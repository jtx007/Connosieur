import React from "react";
import { Link } from "@reach/router"
const Comment = (props) => {
  const { comment } = props

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <Link to={`/profile/${comment.user}`}><img alt="comment-user-icon" src={comment.avatar} /></Link>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{comment.user}</strong>{" "}
            <br />
            {comment.text}
          </p>
        </div>
        
      </div>
      
    </article>
  );
};

export default Comment;