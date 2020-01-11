import React, { Component } from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import content from './content';
import Resume from './components/resume/Resume';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header navbarContent = {content.header}/>
        <About about = {content.about} />
        <Resume resume = {content.resume}/>
      </div>
    )
  }
}