import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ShoeCard from '../ShoeCard/ShoeCard';
class otherUser extends Component {

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
        console.log(this.props.user)
        if (!this.props.user) {
            return <Redirect to='/threads' />
        } else {
            return (
            <div className="profile-container"> 
                <div className="profile-info-and-activity-container">
                    <div className="profile-pic-container">
                        <img alt="profile-pic" className="profile-pic circle responsive-img"src={this.props.user.avatarUrl}/>
                        <div className="profile-info-container">
                            <h6>Welcome {this.props.user.username}</h6>
                            <h6>Age: {this.props.user.age}</h6>
                            <h6>City: {this.props.user.city}</h6>
                        </div>
                    
                    </div>
                    <div className="activity-container">
                    <h5 className="container-title">Recent Activity</h5>
                        <div className="activity-content">
                            <div className="activity-text">
                            {this.listPosts(this.props.user.posts)}
                            </div>
                            <div className="activity-text">
                            {this.listComments(this.props.user.comments)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-post-container">
                   
                </div>
                <br />
                <div className="sneakers-container">
                    <div className="owned-sneakers-container">
                        <h3 className="container-title">Own</h3>
                        <div className="owned-sneakers">
                            <div className="shoe-cards-container">
                                {this.displaySneakers(this.props.user.owned_sneakers, "own")}
                            </div>
                        </div>
                    </div>
                    <div className="wanted-sneakers-container">
                        <h3 className="container-title">Want</h3>
                        <div className="wanted-sneakers">
                            <div className="shoe-cards-container">
                                {this.displaySneakers(this.props.user.wanted_sneakers, "want")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.getAnotherUser.user
        }
    }

export default connect(mapStateToProps)(otherUser)