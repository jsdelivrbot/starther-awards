import React from 'react';
import Card from '../Card';
import './photo-feed.css';

const PhotoFeed = () => (
    <div className="photo-feed">
        <ul className="cards">
            <Card
                imgSrc="https://stationf.co/wp-content/themes/station-f/assets/images/campus-pictures/1536.jpg"
                title="Station F"
            />
            <Card imgSrc="https://stationf.co/wp-content/themes/station-f/assets/images/campus-pictures/1528.jpg" />
            <Card imgSrc="https://stationf.co/wp-content/themes/station-f/assets/images/campus-pictures/1497.jpg" />
            <Card
                imgSrc="http://dreamatico.com/data_images/kitten/kitten-3.jpg"
                title="Kitty kitty kitty"
            />
            <Card
                imgSrc="http://farm1.static.flickr.com/9/12089146_078fce9dcf_o.jpg"
                title="No comment"
            />
            <Card
                imgSrc="https://unsplash.it/600/600?image=1060"
                title="Coffee shop"
            />

            <Card imgSrc="https://unsplash.it/600/600?image=1070" />
            <Card imgSrc="https://unsplash.it/600/600?image=1071" />
            <Card imgSrc="https://unsplash.it/600/600?image=1072" />
            <Card imgSrc="https://unsplash.it/600/600?image=1073" />
            <Card imgSrc="https://unsplash.it/600/600?image=1074" />

            <Card imgSrc="https://unsplash.it/600/600?image=1080" />
            <Card imgSrc="https://unsplash.it/600/600?image=1081" />
            <Card imgSrc="https://unsplash.it/600/600?image=1082" />
            <Card imgSrc="https://unsplash.it/600/600?image=1083" />
            <Card imgSrc="https://unsplash.it/600/600?image=1084" />
        </ul>
    </div>
);

export default PhotoFeed;
