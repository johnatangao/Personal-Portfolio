import React from 'react'
import { Container } from 'react-bootstrap'
import GreetingText from './GreetingText'
import './About.css'
import IntroText from './IntroText'
import SocialMedia from './SocialMedia'
import BackgroundParticles from './BackgroundParticles'

export default function About(props) {
    return (
        <Container fluid={true} className="bg">
            <BackgroundParticles />
            <div className="about-container">
                <GreetingText bigText={props.about.bigText} />
                <IntroText introText1={props.about.introText1} introText2={props.about.introText2} />
                <SocialMedia />
            </div>

        </Container>
    )
}
