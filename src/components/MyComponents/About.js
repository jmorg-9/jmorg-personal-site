import React from 'react'
import './About.css'
import Content from '../Content'

const About = ({ headshot, aboutBody }) => {
  return (
    <div className="about">
      <div className="column">
        <div className="center">
          <img src={headshot} />
        </div>
      </div>
      <div className="column">
        <div className="">
          <Content source={aboutBody} />
        </div>
      </div>
    </div>
  )
}

export default About
