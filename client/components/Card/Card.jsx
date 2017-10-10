import React, { Component } from 'react';
import CardHeader from '../CardHeader';
import './card.css';

class Card extends Component {
    render() {
        const { imgSrc, title } = this.props;
        return (
            <li className="card">
                <CardHeader title={title} />
                <img src={imgSrc} alt={title} />
                <span>
                    <i className="fa fa-bandcamp" />
                </span>
            </li>
        );
    }
}

export default Card;
