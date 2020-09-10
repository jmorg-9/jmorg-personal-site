import React from 'react'
import PropTypes from 'prop-types'
import './About.css'

const About = ({ headshot, aboutText, aboutText2 }) => {
  return (
    <div class="about">
      <div class="column">
        <div className="center">Image</div>
      </div>
      <div class="column">
        <div className="center">
          hey <br /> buddy
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
