import React from 'react'
import { Container } from 'react-bootstrap'
import PortfolioEntry from './PortfolioEntry'
import './Portfolio.css'

import connect4 from './Images/connect-4-thumb.png'
import bloc from './Images/bloc-ressort-thumb.PNG'
import riemann from './Images/riemann-thumb.PNG'
import rocket from './Images/sim-rocket-thumb.PNG'
import stanlee from './Images/stan-lee-thumb.PNG'
import tictactoe from './Images/tic-tac-toe-thumb.PNG'

export default function Portfolio(props) {
    return (
        <div id="portfolio-background">

            <h1 id="portfolio-title"><b>My Work</b></h1>

            <Container fluid={true} className="bg" id="Portfolio-bg" >
                <PortfolioEntry image={connect4} codeLink={props.portfolio[0].Github} name={props.portfolio[0].name} skills={props.portfolio[0].skills} />
                <PortfolioEntry image={bloc} codeLink={props.portfolio[1].Github} name={props.portfolio[1].name} skills={props.portfolio[1].skills}/>
                <PortfolioEntry image={riemann} codeLink={props.portfolio[5].Github} name={props.portfolio[5].name} skills={props.portfolio[5].skills}/>

                <PortfolioEntry image={rocket} codeLink={props.portfolio[3].Github} name={props.portfolio[3].name} skills={props.portfolio[3].skills}/>
                <PortfolioEntry image={stanlee} codeLink={props.portfolio[2].Github} name={props.portfolio[2].name} skills={props.portfolio[2].skills}/>
                <PortfolioEntry image={tictactoe} codeLink={props.portfolio[4].Github} name={props.portfolio[4].name} skills={props.portfolio[4].skills}/>

            </Container>
        </div>

    )
}
