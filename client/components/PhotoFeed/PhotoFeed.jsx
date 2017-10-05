import React from 'react';
import './photo-feed.css';

const PhotoFeed = () => (
    <div className="photo-feed">
        <ul className="cards">
            <li class="card">
                <img src="https://unsplash.it/400/300?image=1080" alt="" />
            </li>
            <li class="card">
                <img src="https://unsplash.it/g/400/300?image=1081" alt="" />
            </li>
            <li class="card">
                <img src="https://unsplash.it/400/300?image=1082" alt="" />
            </li>
            <li class="card">
                <img src="https://unsplash.it/400/300?image=1083" alt="" />
            </li>
            <li class="card">
                <img src="https://unsplash.it/400/300?image=1084" alt="" />
            </li>
            <li class="card">
                <img src="https://unsplash.it/g/400/300?image=1075" alt="" />
            </li>
            <li class="card">
                <img
                    src="https://unsplash.it/400/300?image=1076&gravity=east"
                    alt=""
                />
            </li>
        </ul>
    </div>
);

export default PhotoFeed;
