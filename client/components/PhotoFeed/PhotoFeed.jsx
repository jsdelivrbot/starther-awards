import React from 'react';
import Card from '../Card';
import './photo-feed.css';

const PhotoFeed = () => (
    <div className="photo-feed">
        <ul className="cards">
            <Card
                imgSrc="https://stationf.co/wp-content/themes/station-f/assets/images/campus-pictures/1536.jpg"
                title="Station F collaboration space"
                id="0"
            />
            <Card
                imgSrc="https://stationf.co/wp-content/themes/station-f/assets/images/campus-pictures/1528.jpg"
                title="Station F collaboration space - another angle"
                id="1"
            />
            <Card
                imgSrc="https://stationf.co/wp-content/themes/station-f/assets/images/campus-pictures/1497.jpg"
                title="Station F containers"
                id="2"
            />
            <Card
                imgSrc="http://dreamatico.com/data_images/kitten/kitten-3.jpg"
                title="Kitty kitty kitty"
                id="3"
            />

            <Card
                imgSrc="http://4.bp.blogspot.com/--HXXE8AUjFI/T1O-ytTYsjI/AAAAAAAAD_8/vaP07ubF_-0/s640/cute-bunny-pictures-003.jpg"
                title="Bunny bunny bunny"
                id="4"
            />

            <Card
                imgSrc="http://farm1.static.flickr.com/9/12089146_078fce9dcf_o.jpg"
                title="No explanation"
                id="5"
            />

            <Card
                imgSrc="http://zyzixun.net/data/out/130/3963861-piglet-wallpapers.jpg"
                title="Little piglet"
                id="6"
            />
        </ul>
    </div>
);

export default PhotoFeed;
