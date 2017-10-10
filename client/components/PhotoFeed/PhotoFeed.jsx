import React from 'react';
import Card from '../Card';
import './photo-feed.css';

const PhotoFeed = () => (
    <div className="photo-feed">
        <ul className="cards">
            <Card imgSrc="https://unsplash.it/600/300?image=1060" />
            <Card imgSrc="https://unsplash.it/600/300?image=1061" />
            <Card imgSrc="https://unsplash.it/600/300?image=1062" />
            <Card imgSrc="https://unsplash.it/600/300?image=1063" />
            <Card imgSrc="https://unsplash.it/600/300?image=1064" />

            <Card imgSrc="https://unsplash.it/600/300?image=1070" />
            <Card imgSrc="https://unsplash.it/600/300?image=1071" />
            <Card imgSrc="https://unsplash.it/600/300?image=1072" />
            <Card imgSrc="https://unsplash.it/600/300?image=1073" />
            <Card imgSrc="https://unsplash.it/600/300?image=1074" />

            <Card imgSrc="https://unsplash.it/600/300?image=1080" />
            <Card imgSrc="https://unsplash.it/600/300?image=1081" />
            <Card imgSrc="https://unsplash.it/600/300?image=1082" />
            <Card imgSrc="https://unsplash.it/600/300?image=1083" />
            <Card imgSrc="https://unsplash.it/600/300?image=1084" />
        </ul>
    </div>
);

export default PhotoFeed;
