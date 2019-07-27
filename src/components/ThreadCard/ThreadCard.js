import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux' 
import Comments from './Comments'
import adapters from '../adapters'
import profileAction from './profileAction'


class ThreadCard extends Component {



    state = {
        showCommentInput: false,
        comment: '',
        likes: this.props.thread.likes,
        dislikes: this.props.thread.dislikes
    }


    goToProfile = (id) => {
        adapters.getAnotherUserProfile(id)
        .then( r => r.json())
        .then(data => this.props.profileAction(data))
        .then(() => this.props.history.push('/anotheruser'))
    }

    showCommentInput = () => {
        this.setState(prevState =>({
            showCommentInput: !prevState.showCommentInput
        }))
    }

    addComment = (e) => {
        e.preventDefault()
        adapters.addComment(this.props.user_id, this.props.thread.id, this.state.comment)
        .then(() => this.props.getAllThreads())
        .then(() => this.setState({comment: ''}))
    }

    addLikes = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            likes: prevState.likes + 1 
        }))
        
    }


    addDislikes = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            dislikes: prevState.dislikes + 1
        }))
    }





    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    renderComments = (comments) => {
        return comments.map(comment => {
            return <Comments  key={comment.id} comment={comment}/>
        })
    }

    render() {
        const {thread} = this.props
        console.log(this.props.history)

        return (
        <div className="row">
            <div className="col s12 m6">
            <div className="thread-card card large darken-1">
                <div className="card-content black-text">
                <span className="card-title">{thread.title}</span>
                <p>By <button className="btn-small" onClick={() => this.goToProfile(this.props.user)}> {thread.user}</button></p>
                <br/>
                <p>{thread.body}</p>
    
            </div>
            <div className="">

                <button onClick={this.addLikes} className="button1 waves-effect waves-light btn-small"><i className="material-icons"> arrow_upward </i>Likes:  {this.state.likes} </button>
                <button onClick={this.addDislikes} className="waves-effect waves-light btn-small"><i className="material-icons">arrow_downward</i>Dislikes  {this.state.dislikes}</button>
                <br />
                <h6 className="basic-text-format">Comments</h6>
                <button className="button1 waves-effect waves-light btn-small" onClick={this.showCommentInput}>add comment</button>
                {this.state.showCommentInput ? 
                <form onSubmit={this.addComment}>
                
                <input className="basic-text-format" onChange={this.handleChange} value={this.state.comment} />
                <button type="submit" className="button1 waves-effect waves-light btn-small" >Reply</button>
                </form>
                 : null}
                 <div className="comments-container">
                {this.renderComments(thread.comments)}
                </div>
            </div>
        </div>
        </div>
        </div>
            
    )
    }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.login_user.current_user.id,
        loggedIn: state.login_user.loggedIn
        
    }
}

export default withRouter(connect(mapStateToProps, { profileAction })(ThreadCard))