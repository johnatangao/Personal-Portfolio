import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import PortfolioEntry from './PortfolioEntry'
import './Portfolio.css'

export default function Portfolio(props) {
    return (
        <div id="portfolio-background">

            <h1 id="portfolio-title">My Work</h1>

            <Container fluid={true} className="bg" id="Portfolio-bg" >
                <PortfolioEntry />
                <PortfolioEntry />
                <PortfolioEntry />

                <PortfolioEntry />
                <PortfolioEntry />
                <PortfolioEntry />

            </Container>
        </div>

    )
}
