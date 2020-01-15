import React, { Component } from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/about';
import content from './content';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header navbarContent = {content.header}/>
        <Home home = {content.home} />
        <About about= {content.about}/>
        <Resume resume = {content.resume}/>
        <Portfolio portfolio = {content.portfolio}/>
        <Contact />
      </div>
    )
  }
}