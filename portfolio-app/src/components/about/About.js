import React, { Component } from 'react'
import { Container, Image} from 'react-bootstrap'
import GreetingText from './GreetingText'
import './GreetingText.css'

export default class About extends Component {

    render() {

        return (
            <Container fluid={true} className="bg">
                <GreetingText greetings = {this.props.greetings} />
            </Container>
        )
    }
}
