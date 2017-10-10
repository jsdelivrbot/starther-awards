import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }
    render() {
        const { imgSrc } = this.props;
        return (
            <li className="card">
                {this.state.loading && (
                    <span className="loader">Loading...</span>
                )}
                <img
                    src={imgSrc}
                    onLoad={() => this.setState({ loading: false })}
                    alt=""
                />
                <span>
                    <i className="fa fa-bandcamp" />
                </span>
            </li>
        );
    }
}

export default Card;
