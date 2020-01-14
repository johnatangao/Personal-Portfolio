import React from 'react'
import ResumeEntry from './ResumeEntry'
import './Resume.css'

import ludex from './images/ludex_image.png';
import maisonneuve from './images/maisonneuve_img.jpeg';

export default function Experience(props) {

    const experience = props.experience

    return (
        <div className="container-resume-entry">
            <h2><b>Experience</b></h2>
            <ResumeEntry name={experience[0].name} year={experience[0].year} title={experience[0].title} image={maisonneuve} />
            <ResumeEntry name={experience[1].name} year={experience[1].year} title={experience[1].title} image={ludex} />
        </div>
    )
}
