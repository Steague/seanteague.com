import React, { Component } from 'react';
import { Carousel } from './';

class ShowMore extends Component {
    constructor(props) {
        super(props);

        this.showButton = this.showButton.bind(this);
        this.toggleCollapsedState = this.toggleCollapsedState.bind(this);
    }

    componentWillMount() {
        let { collapsedHeight } = this.props;

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
                        </div>


                        <div className="text">
                            <h2>KIXEYE</h2>
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
                        </div>

                        <div className="text">
                            <h2>KlickNation</h2>
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
                        </div>

                        <div className="text">
                            <h2>Questus</h2>
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
                        </div>
                    </div>
                </ShowMore>
            </div>
        );
    }
}

export default Projects;
