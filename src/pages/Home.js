import React from 'react'
import { Link } from '@reach/router'
import '../styles/Home.css'


const Home = () => {
    return (
      <div className="homepage">
        <section className="hero is-dark is-bold is-medium container homepage-header">
          <div className="hero-body">
            <h1 className="title is-size-2">Welcome to Connosieur</h1>
            <p className="subtitle is-size-4">Connosieur is a platform for individuals passionate about sneakers to come together and share that passion with others. As a longtime collector myself, I wanted to bring back that comradery that used to be around. Check out the posts and the sneaker database. <Link className="home-hero-link" to="/register">Sign up</Link> or <Link className="home-hero-link" to="/login">Login</Link> to get started!
            </p>
          </div>
        </section>
      </div>
    );
}
export default Home