import React, { Component } from 'react';
import CardHeader from '../CardHeader';
import Heart from '../Heart';

import './card.css';

class Card extends Component {
    render() {
        const { id, imgSrc, title } = this.props;
        return (
            <li className="card">
                <CardHeader title={title} />
                <div className="image-container">
                    <img src={imgSrc} alt={title} />
                </div>

                <span>
                    <i className="fa fa-bandcamp" />
                </span>
                <div className="card__footer">
                    <Heart postId={id} />
                </div>
            </li>
        );
    }
}

export default Card;
