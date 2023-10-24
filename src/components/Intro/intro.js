import React from 'react'
import './intro.css'
import bg from '../../assests/my_pic.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Mitanshu Holkar</span><br />Aspiring Software Developer</span>
        <p className='introPara'>I'am a B.Tech Graduate in Computer Science & Business Systems</p>
        <Link><button className="btn"><img src="" alt="" />Hire Me</button></Link>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro