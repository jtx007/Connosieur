import React, { Component } from 'react';
import Github from './githubicon.png'
import Medium from './mediumicon.png'
import Linkedin from './linkedinicon.png'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="footer">
                    <h6>Made by James Thomas</h6>
                    
                        <a id="footer-link" href="https://github.com/jtx007" rel="noopener noreferrer" target="_blank"><img id="footer-icon" src={Github} alt="github-icon" /></a>
                        <a id="footer-link" href="https://medium.com/@jamesjacobthomas7" rel="noopener noreferrer" target="_blank"><img  id="footer-icon" src={Medium} alt="medium-icon" /></a>
                        <a id="footer-link"href="https://www.linkedin.com/in/james-thomas007/" rel="noopener noreferrer" target="_blank"><img id="footer-icon" src={Linkedin} alt="linkedin-icon"/></a>
                    
                </div>
            </footer>
            )
    }
} 