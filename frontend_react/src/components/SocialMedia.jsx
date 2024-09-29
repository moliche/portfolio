import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/moliche" target ="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://linkedin.com/in/rodrigo-moleiro-75527821b"  target ="_blank" rel="noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>
  </div>
  )
}

export default SocialMedia