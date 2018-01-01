import './App.css';

import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import moment from 'moment';
import { Projects } from './projects';

class App extends Component {
    render() {
        let yearsXP = Math.floor(moment(new Date()).diff(moment("10/21/2001","MM/DD/YYYY"),'years',true));

        return (
            <div className="App">
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
                <div className="Section-Container">
                    <div className="Section">
                        <img src="images/me.jpg" alt="Sean Teague" className="Hero-Pic" />
                        <h1>Sean Teague</h1>
                        <h2>Senior Engineering Lead</h2>
                        <h3>Development specialized for the web</h3>
                    </div>
                    <div className="Section">
                        <h2>About Me</h2>
                        <p>
                            I am a software and web technologies engineer with
                            over {yearsXP} years of experience in the industry.
                            In that time I've worked with a variety of
                            clients from SMBs to large organizations such as
                            Boohma,  KIXEYE, Zynga Games Inc. and Telltale Games
                            Inc.
                        </p>
                        <p>
                            Heavily focusing on LAMP stack development early in
                            my career, I have since pivoted to a different
                            approach to software development using Javascript
                            (Node, React &amp; Redux) as well as Python.
                        </p>
                        <p>
                            Additionally, I've been involved with Hackbright
                            Academy, teaching new generations of all female
                            engineers both Python and Javascript.
                        </p>
                        <p>
                            I offer a range of skills and services from basic
                            consultancy through full web solutions including
                            back-end CMS applications to front-end user
                            experiences.
                        </p>
                    </div>
                    <Projects />
                    <div className="Section">
                        <h2>Tools I Use</h2>
                    </div>
                    <div className="Section">
                        <h2>Contact Me</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
