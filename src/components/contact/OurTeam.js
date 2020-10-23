import React from 'react';
import OurTeamCarousel from './OurTeamCarousel';
import AboutOurTeam from './AboutOurTeam';

const OurTeam = () => {
    return (
        <div className="container">
            <div className="our-team">
                <OurTeamCarousel />
                <AboutOurTeam title="Bizning jamoa" />
            </div>
        </div>
    )
}

export default OurTeam
