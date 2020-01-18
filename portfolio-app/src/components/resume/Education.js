import React from 'react'
import ResumeEntry from './ResumeEntry'

import maisonneuve from './images/maisonneuve_img.jpeg'
import polytechnique from './images/polytechnique_img.jpg'

import VerticalModel from './VerticalModal'

export default function Education(props) {
    const education = props.education

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="container-resume-entry">
            <h2><b>Education</b></h2>
            <ResumeEntry onClick={() => {setModalShow(true)}} name={education[0].name} year={education[0].year} title={education[0].title} image={polytechnique} />
            <ResumeEntry onClick={() => {setModalShow(true)}} name={education[1].name} year={education[1].year} title={education[1].title} image={maisonneuve} />
            <VerticalModel show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}
