import React, { Component } from 'react';
import fetch from 'universal-fetch';
import { getUserId } from '../../lib/utils/index.js';

import './heart.css';

class Heart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
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

    render() {
        return (
            <div
                className={`heart ${this.state.liked ? 'heart--liked' : null}`}
                onClick={this.toggleLike}
            />
        );
    }
}

export default Heart;
