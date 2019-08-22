import React, { Component } from 'react';
import { Link, Redirect } from'react-router-dom'
import { connect } from 'react-redux'
import meAction  from './Me'
import adapters from '../adapters'
import ShoeCard from '../ShoeCard/ShoeCard'

 class Profile extends Component {


    state = {
        username: '',
        age: '',
        city: '',
        avatarUrl: '',
        own: [],
        want: [],
        posts: [],
        comments: []
    }


    componentDidMount() {
        this.getCurrentUser()

    }

    getCurrentUser = () => {
        adapters.getCurrentUser()
        .then( r => r.json())
        .then(data => this.setState({
            username: data.username,
            age: data.age,
            avatarUrl: data.avatarUrl,
            city: data.city,
            own: data.owned_sneakers,
            want: data.wanted_sneakers,
            posts: data.posts,
            comments: data.comments
        }))
    }



   

    displaySneakers = (shoes, type) => {
        
        return shoes.map(shoe => {
            return <ShoeCard type={type} getCurrentUser={this.getCurrentUser} showButtons={false} key={shoe.id} shoe={shoe}/>
        }) 
    }

    




    listPosts = (data) => {
        return data.map(detail => {
            return <p key={detail.id}>Post: {detail.title}</p>
        })
    }

    listComments = (data) => {
        return data.map(detail => {
            return <p key={detail.id}>Comment: {detail.text}</p>
        })
    }


    

    render() {
    if (this.props.loggedIn && this.props.currentUser) {
            return (
            <div className="profile-container"> 
                <div className="profile-info-and-activity-container">
                    <div className="profile-pic-container">
                        <img alt="profile-pic" className="profile-pic circle responsive-img" src={this.state.avatarUrl}/>
                        <div className="profile-info-container">
                            <h6>Welcome {this.state.username}</h6>
                            <h6>Age: {this.state.age}</h6>
                            <h6>City: {this.state.city}</h6>
                        </div>
                    
                    </div>
                    <div className="activity-container">
                    <h5 className="container-title">Recent Activity</h5>
                        <div className="activity-content">
                            <div className="activity-text">
                            {this.listPosts(this.state.posts)}
                            </div>
                            <div className="activity-text">
                            {this.listComments(this.state.comments)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-post-container">
                    <Link to="/postform" className="new-post-button btn waves-effect waves-blue" type="submit" name="action">New Post
                    <i className="material-icons right">send</i>
                    </Link>
                </div>
                <br />
                <div className="sneakers-container">
                    <div className="owned-sneakers-container">
                        <h3 className="container-title">Own</h3>
                        <div className="owned-sneakers">
                            <div className="shoe-cards-container">
                                {this.displaySneakers(this.state.own, "own")}
                            </div>
                        </div>
                    </div>
                    <div className="wanted-sneakers-container">
                        <h3 className="container-title">Want</h3>
                        <div className="wanted-sneakers">
                            <div className="shoe-cards-container">
                                {this.displaySneakers(this.state.want, "want")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
                
            )
        } else {
            return <Redirect to='/login' />
        }
    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.login_user.loggedIn,
        currentUser: state.login_user.current_user
    }

}
export default connect(mapStateToProps, { meAction })(Profile)