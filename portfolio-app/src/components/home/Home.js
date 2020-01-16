import React from 'react'
import { Container } from 'react-bootstrap'
import GreetingText from './GreetingText'
import './Home.css'
import IntroText from './IntroText'
import SocialMedia from './SocialMedia'
import BackgroundParticles from './BackgroundParticles'

export default function Home(props) {
    return (
        <Container fluid={true} className="bg">
            <BackgroundParticles />
            <div className="home-container">
                <GreetingText bigText={props.home.bigText} />
                <IntroText introText1={props.home.introText1} introText2={props.home.introText2} />
                <SocialMedia />
            </div>

        </Container>

    )
}
