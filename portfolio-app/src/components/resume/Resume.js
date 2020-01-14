import React from 'react'
import './Resume.css'
import { Container } from 'react-bootstrap'
import Education from './Education'
import Experience from './Experience'
import Certificate from './Certificate'

export default function Resume(props) {
    return (
        <Container className="bg" id="resume-bg" fluid={true}>
            <div className="categorie-container">
                <Education education={props.resume.education} />
                <Experience experience={props.resume.experience} />
                <Certificate certificate={props.resume.certificates}/>
            </div>

        </Container>
    )
}