import React, { Component } from 'react';
import { RoundLogo } from './';

class Tools extends Component {
    render() {
        return (
            <div className="Section">
                <h2>Tools I Use</h2>
                <div className="Tools-Container">
                    <RoundLogo
                        image="images/tools/node.png"
                        roundImage={false}
                        link="https://nodejs.org/"
                    />
                    <RoundLogo
                        image="images/tools/react.png"
                        roundImage={false}
                        link="https://reactjs.org/"
                    />
                    <RoundLogo
                        image="images/tools/atom.png"
                        roundImage={false}
                        link="https://ide.atom.io/"
                    />
                    <RoundLogo
                        image="images/tools/slack.png"
                        roundImage={false}
                        link="https://slack.com/"
                    />
                    <RoundLogo
                        image="images/tools/github.png"
                        roundImage={false}
                        link="https://github.com/"
                    />
                    <RoundLogo
                        image="images/tools/jira.png"
                        roundImage={false}
                        link="https://www.atlassian.com/software/jira"
                    />
                    <RoundLogo
                        image="images/tools/linkdin.png"
                        roundImage={true}
                        link="https://www.linkedin.com"
                    />
                    <RoundLogo
                        image="images/tools/android.png"
                        roundImage={false}
                        link="https://developer.android.com/"
                    />
                    <RoundLogo
                        image="images/tools/slic3r.png"
                        roundImage={false}
                        link="http://slic3r.org/"
                    />
                    <RoundLogo
                        image="images/tools/onshape.png"
                        roundImage={true}
                        link="https://www.onshape.com/"
                    />
                </div>
            </div>
        );
    }
}

export default Tools;
