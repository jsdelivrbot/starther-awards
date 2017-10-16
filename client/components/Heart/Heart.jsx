import React, { Component } from 'react';
import fetch from 'universal-fetch';
import { getUserId } from '../../lib/utils/index.js';

import './heart.css';

class Heart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            count: Math.round(Math.random() * 10)
        };
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount() {
        const { postId } = this.props;
        const userId = getUserId();
        console.log(getUserId());
        // getHeartState and update heart and like count
    }

    toggleLike() {
        console.log(this.props);
        fetch('//offline-news-api.herokuapp.com/stories')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(stories => {
                this.setState({
                    liked: !this.state.liked
                });
            });
    }

    getCountLabel() {
        const { liked, count } = this.state;
        if (count === 0) {
            return 'Nobody liked this 😢, give some love!';
        }
        if (liked) {
            if (count === 1) {
                return `You liked this`;
            } else {
                return `You and ${count - 1} ${count - 1 === 1
                    ? 'other'
                    : 'others'} liked this`;
            }
        } else {
            return `${count} people like this`;
        }
    }

    render() {
        return (
            <div className="heart-container">
                <div
                    className={`heart ${this.state.liked
                        ? 'heart--liked'
                        : null}`}
                    onClick={this.toggleLike}
                />
                <span className="heart__label">{this.getCountLabel()}</span>
            </div>
        );
    }
}

export default Heart;
