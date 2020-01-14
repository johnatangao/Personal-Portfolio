import React from 'react'
import './Resume.css'
import ResumeEntry from './ResumeEntry'

import freeCodeCamp from './images/freecodecamp_image.jpeg'

export default function Certificate(props) {

    const certificate = props.certificate

    return (
        <div className="container-resume-entry">
            <h2><b>Certificates</b></h2>
            <ResumeEntry name={certificate[0].name} title={certificate[0].title} year={certificate[0].year} image={freeCodeCamp} />
            <ResumeEntry name={certificate[1].name} title={certificate[1].title} year={certificate[1].year} image={freeCodeCamp}/>
        </div>
    )
}
