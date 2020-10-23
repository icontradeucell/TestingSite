import React from 'react';
import PageTitle from '../global/PageTitle';

const AboutOurTeam = ({ title }) => {
    return (
        <div className="about-our-team">
            <PageTitle title={`${title}`} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, incidunt aliquam. Iusto a maxime recusandae, ullam alias laborum nulla repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eum.</p>
            <img src={require('../../assets/contact/aboutTeamBg.png')} alt="" />
        </div>
    )
}

export default AboutOurTeam
