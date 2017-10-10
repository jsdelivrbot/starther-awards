import React from 'react';
import './card-header.css';

const CardHeader = ({ title }) => (
    <div className="card-header">
        <div className="avatar">
            <img src="/dd_logo_70x75.png" alt="bits avatar" />
        </div>
        <div className="card-info">
            <span className="username">bits</span>
            <span>{title}</span>
        </div>
    </div>
);

export default CardHeader;
