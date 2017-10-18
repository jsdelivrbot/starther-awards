import React, { Component } from 'react';
import fetch from 'universal-fetch';
import { getUserId } from '../../lib/utils/index.js';

import './heart.css';

class Heart extends Component {
    constructor(props) {
        super(props);
        this.userID = getUserId();
        this.state = {
            status: false,
            count: 0
        };
        this.toggleLike = this.toggleLike.bind(this);
        this.fetchLikes = this.fetchLikes.bind(this);
    }

    fetchLikes(postID, userId) {
        return fetch(`/likes/${postID}?user_id=${userId}`)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(result => {
                this.setState(result);
                setTimeout(() => {
                    this.fetchLikes(postID, userId);
                }, 3000);
            });
    }
    componentDidMount() {
        const { postID } = this.props;
        const userId = getUserId();
        this.fetchLikes(postID, userId);
    }

    toggleLike() {
        const { status, count } = this.state;
        this.setState({
            status: !status,
            count: status ? count - 1 : count + 1
        });
        fetch('/likes/toggle', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: this.userID,
                postID: this.props.postID
            })
        })
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(res => {
                this.setState(res);
            });
    }

    getCountLabel() {
        const { status, count } = this.state;
        if (count === 0) {
            return 'Nobody liked this 😢, give some love!';
        }
        if (status) {
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
                    className={`heart ${this.state.status
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
