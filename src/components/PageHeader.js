import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import './PageHeader.css'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaChevronDown
} from 'react-icons/fa'

const PageHeader = ({
  title,
  name,
  subtitle,
  backgroundImage,
  large,
  facebook,
  linkedin,
  github,
  displaySocialLinks = false,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">
          <div>
            {title}&nbsp;
            <span className="PageHeader--Name">{name}</span>.
          </div>
          <div>{subtitle}</div>
        </h1>
        {displaySocialLinks && (
        <ul className="social">
          <li>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
        )}
        
        {/* <div className="chevron-box">
          <a className="chevron" href="/#About">
            <FaChevronDown />
          </a>
        </div> */}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  name: PropTypes.string,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string
}

export default PageHeader
