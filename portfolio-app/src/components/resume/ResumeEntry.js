import React from 'react'
import './Resume.css'
import { Container, Image } from 'react-bootstrap'

export default function ResumeEntry(props) {

    return (
        <Container md="auto" className="container-entry" fluid={true}>
            <Image className="school-logo" width="120" height="120" src={props.image} roundedCircle />
                <div>
                    <h4>{props.name}</h4>
                    <h6>{props.title}</h6>
                    <h6>{props.year}</h6>
                </div>

        </Container>
    )
}
