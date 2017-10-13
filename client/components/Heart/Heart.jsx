import React, { Component } from 'react';
import fetch from 'universal-fetch';

import './heart.css';

class Heart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike() {
        console.log(this.props.id);
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
