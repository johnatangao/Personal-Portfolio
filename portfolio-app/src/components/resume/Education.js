import React from 'react'
import ResumeEntry from './ResumeEntry'

import maisonneuve from './images/maisonneuve_img.jpeg'
import polytechnique from './images/polytechnique_img.jpg'

export default function Education(props) {
    const education = props.education
    return (
        <div className="container-resume-entry">
            <h2><b>Education</b></h2>
            <ResumeEntry name={education[0].name} year={education[0].year} title={education[0].title} image={polytechnique} />
            <ResumeEntry name={education[1].name} year={education[1].year} title={education[1].title} image={maisonneuve} />
        </div>
    )
}
