import React, { Component } from 'react';
import ThreadCard from '../ThreadCard/ThreadCard'
import adapters from '../adapters'
import { connect } from 'react-redux'

class Threads extends Component {


    state = {
        threads: []
    }


    componentDidMount() {
        this.fetchThreads()
    }

    fetchThreads = () => {
        adapters.allThreads()
        .then(r => r.json())
        .then(threads => this.setState({threads}))   
    }


    deleteThread = (id) => {
        this.setState( prevState =>  ({
            threads: this.filterOutDeletedThreads(prevState.threads, id)

        }))
    }

    filterOutDeletedThreads = (threads, id) => {
        return threads.filter(thread => {
            return thread.id !== id
        })
    }





     genThreads = (threads) => {
        return threads.map(thread => {
            return <ThreadCard user={thread.user_id} key={thread.id} thread={thread} getAllThreads={this.fetchThreads} />
        })
    }



    render() {
        console.log(this.state.threads)
        return (
            <div className="thread-page">
                <ul className="collection">
                {this.genThreads(this.state.threads)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn
    }
}


export default connect(mapStateToProps)(Threads)