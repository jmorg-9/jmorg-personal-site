import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  title2,
  name,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <div className="overlay">
          <Image
            background
            resolutions="large"
            src={backgroundImage}
            alt={title}
            size="cover"
          />
        </div>
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">
          <div>
            {title}&nbsp;
            <span className="PageHeader--Name">{name}</span>.
          </div>
          <div>{title2}</div>
        </h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  name: PropTypes.string,
  title2: PropTypes.string
}

export default PageHeader
