import React from 'react'
import {Container} from 'react-bootstrap'

import './About.css'

export default function about(props) {
    return (
        <div className="bg" id="about-me-bg">
            <Container>
                <q className="about-me-description" > {props.about} </q>
            </Container>
        </div>
    )
}
