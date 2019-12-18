import React, {useState} from 'react';
import { LoginContext } from '../context/loginContext'
import { Redirect, navigate } from '@reach/router'
import { createPost } from '../api/adapters'
import "../styles/form.css"

const NewPost = (props) => {

    const [postValues, createNewPost] = useState({
        title: "",
        body: ""
    })


    const handleInputChange = e => {
      const { name, value } = e.target;
      createNewPost({ ...postValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(postValues, props.user_id)
        navigate("/posts")

       
    }

    const renderFormOrRedirect = () => {
        if (props.token && props.user_id) {
            return (
                <form onSubmit={handleSubmit} className="form container">
                    <br />
                    <h1 className="title">Create New Post</h1>
                    <div className="field">
                        <label className="label">Enter Title</label>
                        <input 
                        required
                        onChange={handleInputChange}
                        type="text"
                        name="title"
                        value={postValues.title}
                        className="input" />
                    </div>
                    <label className="label">Enter Body</label>
                    <textarea
                    required
                    onChange={handleInputChange}
                    className="textarea"
                    type="text"
                    name="body"
                    value={postValues.body}
                    ></textarea>
                    <br />
                    <button className="button is-info is-medium" type="submit">Create Post</button>
                </form>
            )
        } else {
            return <Redirect to="login" noThrow />
        }
    }


    return (
        <>
            {renderFormOrRedirect()}
        </>
    )
}

const NewPostWithContext = () => {
    return (
        <LoginContext.Consumer>
            {value => {
                return <NewPost {...value} />
            }}
        </LoginContext.Consumer>
    )
}



export default NewPostWithContext;