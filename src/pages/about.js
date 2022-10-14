import React, { useEffect } from "react";
// import "../css/about.css";
import ImageSlider from '../components/imageSlider';
import {SliderData} from "../components/sliderData"
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
                opacity: 1,
                transition: {
                duration: 0.8,
                }
            })
        };
        if (!inView) {
            animateAboutMe.start({
                x: -100,
                opacity: 2
            })
        };
    });

    var images = [
        require('../slideshow/football.jpg'),
        require('../slideshow/hiking.jpg'),
        require('../slideshow/travelling.jpg'),
      ];

    return (
    <motion.div  ref={ref} animate={animateAboutMe} id="About" className="about">
       
       <div>
      <div >
        <div >
          <h2>
            About Me
          </h2>
          <p >
          My name is Abdelbar and I'm based in Manchester, UK.
          </p>
          <p>
            I had a career switch from Chemical Engeneering to Full-stack Web Development.
            </p>
            <p>
            Becoming a developer is a fairly recent aspiration of mine, I have always been interested in technology from a young age where I created a YouTube channel reviewing technology gadgets. I was always fascinated by how websites and games work but I never truly delved into the requirements to enter these roles.
            {/* I thought it would be the right time to decide to go deeper into coding and start a new path in my professional career. */}
          </p>
          <p >
            I recently completed a 12 month Bootcamp where we studied Javascript as a programing language. 
            In addition to JavaScript, I also have delved into C# as a programming language.      
          </p>
          <p>
            I am looking for a challenging new opportunity to kickstart my career in coding within the software development industry. I want to utilise my existing skills and advance my knowledge in the industry.   
            {/* I enjoy learning new things and some of my hobbies and interests include gaming, nature, technology, and travelling.       */}
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-[#ae3cfa] underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        {/* <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'> */}
          {/* <a
            href='https://www.linkedin.com/in/flavia-hotts/'
            target='_blank'
            rel='noreferrer'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </a> */}
        {/* </div> */}
      </div>
    </div>
       
        {/* <div className="title-about">
    <h1>About Me</h1>
    </div>
  
      <div className="container">
        <div className="hobbies">
        <div className="image-container">
        <h2>Interests &amp; Hobbies</h2>
        <ImageSlider slides={SliderData}></ImageSlider>
        </div>
        </div>
     <div className="about-container">
      <div className="content">
      <div className="cards">
      <article className="card">
      <h5>Profile</h5>
      <medium className="para">Becoming a developer is a fairly recent aspiration of mine, I have always been interested in technology from a young age where I created a YouTube channel reviewing technology gadgets. I was always fascinated by how websites and games work but I never truly delved into the requirements to enter these roles.</medium>
      </article>
      <article className="card">
      <h5>Experience</h5>
      <medium className="para">Recently, I completed Master Bootcamp IT Level 4 at Code Nation, I am keen and passionate to explore and learn more about other programming languages and skills. I have also finished a programming language course C#.</medium>
      </article>
      <article className="card">
      <h5>Goals</h5>
      <medium className="para">I am looking for a challenging new opportunity to kickstart my career in coding within the software development industry. I want to utilise my existing skills and advance my knowledge in the industry.</medium>
      </article>
      </div>
      </div>
      </div>
      </div> */}

      
  </motion.div>

    )
};

export default About;
