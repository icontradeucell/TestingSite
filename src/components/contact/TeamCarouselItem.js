import React from 'react';
import RoundPic from '../global/RoundPic';

const TeamCarouselItem = ({ name, position }) => {
    return (
        <div className="team-carousel-item">
            <RoundPic borderColor="orange" width={80} />
            <span>{name}</span>
            <span>{position}</span>
            <div className="social-media-icons">
                <div className='media-link'>
                    <i className='fab fa-telegram-plane'></i>
                </div>
                <div className='media-link'>
                    <i className='fab fa-facebook-f'></i>
                </div>
            </div>
        </div>
    )
}

export default TeamCarouselItem
