import React from 'react'
import PropTypes from 'prop-types'
import './About.css'
import Image from '../Image'
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

About.propTypes = {
  aboutText: PropTypes.string,
  aboutText2: PropTypes.string
}

export default About
