import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import adapters from '../adapters'
 class PostForm extends Component {


    state = {
        title: '',
        body: ''
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        let thread = Object.assign({...this.state})
        adapters.createThread(thread, this.props.current_user.id)
        .then(() => this.props.history.push('/threads'))
    }


    render() {
        if (this.props.loggedIn) {
        return (
            <form onSubmit={this.handleSubmit} className="col s12 input1">
                <div className="row">
                <h2 className="form-title">New thread</h2>
                    <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>

                        <input onChange={this.handleChange} value={this.state.title} name="title" id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Title</label>
                    </div>
                </div>
                <div className="row input2">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>

                    <textarea onChange={this.handleChange} value={this.state.body} name="body" id="textarea2" className="materialize-textarea" data-length="2000"></textarea>
                    <label htmlFor="textarea2">Body</label>
                    </div>
                </div>
                <div className="row post-btn">
                    <button type="submit" className="btn-large red pulse">Create Thread</button>
                </div>
            </form>
        )
        } else {
            return <Redirect to='/login' />
        }
    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn : state.login_user.loggedIn,
        current_user: state.login_user.current_user
    }
}

export default connect(mapStateToProps)(PostForm)