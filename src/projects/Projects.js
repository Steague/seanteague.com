import React, { Component } from 'react';
import { Carousel } from './';

class ShowMore extends Component {
    constructor(props) {
        super(props);

        this.showButton = this.showButton.bind(this);
        this.toggleCollapsedState = this.toggleCollapsedState.bind(this);
    }

    componentWillMount() {
        this.setState({
            collapsed: true
        });
    }

    toggleCollapsedState() {
        let { collapsed } = this.state;

        this.setState({
            collapsed: !(collapsed)
        });
    }

    showButton() {
        let { collapsed } = this.state;
        let { more, less } = this.props;

        return (
            <button className="ShowMore-Button" onClick={this.toggleCollapsedState}>{collapsed ? more : less}</button>
        );
    }

    render() {
        let { collapsed } = this.state;
        let { collapsedHeight } = this.props;

        return (
            <div className="Section-ShowMore-Container">
                <div style={(collapsed ? {
                    maxHeight: collapsedHeight+"px"
                } : null)} className={"Section-ShowMore "+(collapsed ? "collapsed" : "expanded")}>
                    {this.props.children}
                </div>
                <div>
                    {this.showButton()}
                </div>
            </div>
        );
    }
}

class Projects extends Component {
    render() {
        return (
            <div className="Section">
                <h2>Projects</h2>
                <ShowMore
                    collapsedHeight={200}
                    more='Show more'
                    less='Show less'
                >
                    <div className="Projects-Grid">
                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/hackbright/hackbright.png' }
                                ]}
                            />
                        </div>
                        <div className="text">
                            <h2>Hackbright Academy</h2>
                            <p>
                                Instructor for Hackbright Fellowship program
                                &amp; Front-end Development course.
                            </p>
                            <ul>
                                <li>Involved creation of curriculum involving Python, HTML, CSS, Javascript.</li>
                                <li>Extensive work on JS lectures and course curriculum.</li>
                                <li>Created exercise course work.</li>
                                <li>Developed syllabus.</li>
                            </ul>
                        </div>


                        <div className="text">
                            <h2>KIXEYE</h2>
                            <ul>
                                <li>Technology ownership & decision making processes.</li>
                                <li>Collaboration with team members to produce and manage high quality code.</li>
                                <li>Demonstrated ability to augment complex code bases.</li>
                                <li>Take ownership of feature development for both client and server side specifications from concept through deployment.</li>
                                <li>Integration of social and mobile APIs – Facebook, Viximo, Twitter using social game features i.e: like, ratings, reviews, fan page, stream posts.</li>
                            </ul>
                        </div>
                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/kixeye/battlepirates.jpg' },
                                    { image: 'images/portfolio/kixeye/kixeye.png' }
                                ]}
                            />
                        </div>

                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/telltale/telltale-devils-playhouse.png' },
                                    { image: 'images/portfolio/telltale/telltale-homepage.png' },
                                    { image: 'images/portfolio/telltale/telltale-poker-night.png' }
                                ]}
                            />
                        </div>
                        <div className="text">
                            <h2>Telltale Games</h2>
                            <p>
                                I was involved with new and old projects
                                throughout the entire project's life cycle from
                                concept to implementation.
                            </p>
                            <p>
                                Constantly striving to innovate, I was the lead
                                engineer in implementing new technologies such
                                as Flash/JavaScript bridging as well as cross
                                (hardware) platform applications.
                            </p>
                        </div>

                        <div className="text">
                            <h2>KlickNation</h2>
                            <p>
                                My time at KlickNation was as a contractor
                                utilizing my knowledge of the Facebook API as
                                well as my skills with PHP, XHTML and MySQL. I
                                helped create and author many features used
                                among KilckNations suite of Facebook
                                applications.
                            </p>
                        </div>
                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/klicknation/klicknation-homepage.png' },
                                    { image: 'images/portfolio/klicknation/klicknation-sns.png' }
                                ]}
                            />
                        </div>

                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/zynga/dragonwars.png' },
                                    { image: 'images/portfolio/zynga/vampirewars.png' }
                                ]}
                            />
                        </div>
                        <div className="text">
                            <h2>Zynga</h2>
                            <p>
                                Creating new content as well as maintaining
                                legacy PHP code for developing web based games
                                for the Facebook and MySpace platforms.
                            </p>
                            <p>
                                Games directly worked on include Vampire Wars,
                                Dragon Wars, Gang Wars, Prison Lockdown &amp;
                                Fashion Wars.
                            </p>
                        </div>

                        <div className="text">
                            <h2>Questus</h2>
                            <p>
                                Developed Javascript interaction between image
                                and server data using an ASP engine.
                            </p>
                        </div>
                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/questus/questus-suzuki-cycles-homepage.png' },
                                    { image: 'images/portfolio/questus/questus-suzuki-cycles.png' }
                                ]}
                            />
                        </div>

                        <div className="img">
                            <Carousel
                                items = {[
                                    { image: 'images/portfolio/versicom/myreturnstatus.png' },
                                    { image: 'images/portfolio/versicom/taxinfonet-1.png' },
                                    { image: 'images/portfolio/versicom/taxinfonet-2-(client-admin).png' },
                                    { image: 'images/portfolio/versicom/taxinfonet-3-(backend-admin).png' },
                                    { image: 'images/portfolio/versicom/thbc-2-(client-admin).png' },
                                    { image: 'images/portfolio/versicom/thbc-3-(backend-admin).png' }
                                ]}
                            />
                        </div>
                        <div className="text">
                            <h2>Versicom</h2>
                            <p>
                                Leader in three major commercial projects using
                                PHP 5 and MySQL 5 that allow the client's
                                customers to access back-end parsed stored data
                                via a website created for the end user. The
                                current status of the projects is they are being
                                migrated from legacy procedural code to fully
                                object-oriented design and function.
                            </p>
                        </div>
                    </div>
                </ShowMore>
            </div>
        );
    }
}

export default Projects;
