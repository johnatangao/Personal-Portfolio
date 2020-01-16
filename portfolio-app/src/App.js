import React, { Component } from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/about';
import content from './content';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact'
import { Element } from 'react-scroll'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header navbarContent = {content.header}/>
        <Element name='Home' id="Home">
          <Home home = {content.home} />
        </Element>
        
        <Element name='About' id='About'>
          <About about= {content.about}/>
        </Element>
        
        <Element name='Resume' id='Resume'>
          <Resume resume = {content.resume}/>
        </Element>
        
        <Element name='Projects' id='Projects'>
          <Portfolio portfolio = {content.portfolio}/>
        </Element>
        
        <Element name='Contact' id='Contact'>
          <Contact />
        </Element>
        

      </div>
    )
  }
}