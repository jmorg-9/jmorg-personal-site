import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const PageHeader = ({
  title,
  name,
  subtitle,
  backgroundImage,
  large,
  facebook,
  linkedin,
  github,
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
        <ul className="social">
          <li>
            <a
              className="fab fa-facebook-f"
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              className="fab fa-linkedin-in"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              className="fab fa-github"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
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
