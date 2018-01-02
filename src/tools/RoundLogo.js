import React, { Component } from 'react';

class RoundLogo extends Component {
    render() {
        let { image,
            roundImage,
            link } = this.props;

        return (
            <a href={link} target="_blank">
                <div className={"RoundLogo" + (roundImage ? " RoundImage" : "")}>
                    <img src={image} alt="" />
                </div>
            </a>
        );
    }
}

export default RoundLogo;
