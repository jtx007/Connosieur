import React, { Component } from 'react'

class Comments extends Component {

  




    render() {
        console.log(this.props)
        return (
            
            <p className="basic-text-format">{this.props.comment.username}: {this.props.comment.text}</p>
        )
    }
}

export default Comments