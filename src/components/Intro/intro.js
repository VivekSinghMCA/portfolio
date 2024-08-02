import React from 'react';
import './intro.css';
import bg from '../../assets/vika.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

let hiring = ()=>{
  window.location = 'https://www.google.com'
}

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Vivek</span> <br />Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
          <Link><button className="btn" onClick={hiring}><img src={btnImg} alt="Hire" className='btnImg' />Hire me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
