import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript and ReactJs, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>I design UI AND UX for clients as per their need.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>I have designed websites for many clients. Let me know what you need.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>I design every type of Apps like Gaming, E-commerce, Finance etc.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
