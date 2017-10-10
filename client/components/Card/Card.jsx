import React, { Component } from 'react';
import CardHeader from '../CardHeader';
import CardFooter from '../CardFooter';
import './card.css';

class Card extends Component {
    render() {
        const { imgSrc, title } = this.props;
        return (
            <li className="card">
                <CardHeader title={title} />
                <div className="image-container">
                    <img src={imgSrc} alt={title} />
                </div>

                <span>
                    <i className="fa fa-bandcamp" />
                </span>
                <CardFooter />
            </li>
        );
    }
}

export default Card;
