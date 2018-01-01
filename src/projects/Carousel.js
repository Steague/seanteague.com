import React, { Component } from 'react';
import { Carousel as CarouselBS } from 'react-bootstrap';
import _ from 'lodash';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.handleSelect     = this.handleSelect.bind(this);
        this.getCarouselItems = this.getCarouselItems.bind(this);
    }

    componentWillMount() {
        this.setState({
            index: 0,
            direction: null,
        });
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    getCarouselItems(items) {
        return _.map(items, (item, k) => {
            return (
                <CarouselBS.Item key={k}>
                    <img width={900} height={500} alt="900x500" src={item.image} />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </CarouselBS.Item>
            );
        });
    }

    render() {
        return (
            <CarouselBS activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                {this.getCarouselItems(this.props.items)}
            </CarouselBS>
        );
    }
}

export default Carousel;
