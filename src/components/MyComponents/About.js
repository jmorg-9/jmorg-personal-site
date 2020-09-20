import React from 'react'
import PropTypes from 'prop-types'
import './About.css'
import Image from '../Image'
import Content from '../Content'

const About = ({ headshot, aboutText, aboutText2, aboutBody }) => {
  return (
    <div class="about">
      <div class="column">
        <div className="center">
          <img src={headshot} />
        </div>
      </div>
      <div class="column">
        <div className="center">
          <Content source={aboutBody} />
          {/* {aboutText} <br/> {aboutText2} */}
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
