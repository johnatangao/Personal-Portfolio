import React from 'react'
import './Resume.css'
import { Container } from 'react-bootstrap'
import Education from './Education'

export default function Resume(props) {
    return (
        <Container className="bg" fluid={true}>
            <Education education={props.resume.education} />
        </Container>
    )
}