import React from 'react'
import './Resume.css'
import Image from '../Image'

const Resume = ({background, title, subtitle}) => {
  return (
    <div className="resume relative">
        <Image
          background
          resolutions="large"
          src={background}
          size="cover"
        />
        <div className="container relative">
            <h2>
                <div className="resume-title">{title}</div>
                <div className="resume-subtitle">{subtitle}</div>
            </h2>
            <div className="button"><a>View My Resume</a></div>
            
        </div>
    </div>
  )
}

export default Resume
