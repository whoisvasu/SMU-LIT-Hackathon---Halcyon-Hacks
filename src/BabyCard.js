import React from 'react'
import './BabyCard.css';

function BabyCard({ src, title, description }) {
    return (
        <div className='bcard'>
            <img src={src} alt="" />
            <div className="bcard__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default BabyCard
