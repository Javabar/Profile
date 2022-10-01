import React, { useEffect } from "react";
import "../css/about.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const About = () => {

    const {ref, inView} = useInView({
        threshold: 0.4
    });
    const animateAboutMe = useAnimation();

    useEffect(() => {
        if (inView) {
            animateAboutMe.start({
                x: 0,
                opacity: 1.5,
                transition: {
                duration: 0.95,
                staggerChildren: 0.4,
                }
            })
        };
        if (!inView) {
            animateAboutMe.start({
                x: -200,
                opacity: 10
            })
        };
    });

    return (
    <motion.div  ref={ref} animate={animateAboutMe} id="About" className="about">
        <div className="title-about">
    <h1>About Me</h1>
    </div>
  
      <div className="container">
     <div className="about-container">
      <div className="content">
      <div className="cards">
      <article className="card">
      <h5>Profile</h5>
      <p>Becoming a developer is a fairly recent aspiration of mine, I have always been interested in technology from a young age where I created a YouTube channel reviewing technology gadgets. I was always fascinated by how websites and games work but I never truly delved into the requirements to enter these roles.</p>
      </article>
      <article className="card">
      <h5>Experience</h5>
      <p>Recently, I completed Master Bootcamp IT Level 4 at Code Nation, I am keen and passionate to explore and learn more about other programming languages and skills. I have started looking into C#.</p>
      </article>
      <article className="card">
      <h5>Goals</h5>
      <p>I am looking for a challenging new opportunity to kickstart my career in coding within the software development industry. I want to utilise my existing skills and advance my knowledge in the industry.</p>
      </article>
      </div>
      </div>
      </div>
      </div>

      
  </motion.div>

    )
};

export default About;
