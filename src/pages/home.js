import React from "react";
import "../css/home.css";
import profile from "../images/profile.jpg";
import CV from "../files/CV.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {

    const animateArt = {
        initial: {
            x: -300,
            opacity: 0,
            scale: 1.5
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.75,
                ease: "easeOut",
            }
        }
    }

    const animateText = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.75
            }
        }
    }

    const animateOne = {
        initial: {
            y: 50,
            opacity: 0,
            scale: 1.25
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.75,
                ease: "easeOut",
            }
        }
    }

    const animateButton = {
        initial: {
            y: 70,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                bounce: 0.5
            }
        }
    }

    const animateStyle = {
        initial: {
          y: 50,
          opacity: 0,
          scale: 1.25,
        },
        animate: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.75,
            ease: "easeOut",
          },
        },
      };

    return (
<div>
    <header id="bio">
        <motion.div variants={animateArt} initial="initial" animate="animate" className="image">
             <div className="image-profile">
             <img src={profile} alt="Profile pic" />
             </div>
        </motion.div>
        
        <motion.div variants={animateText} initial="initial" animate="animate" className="header-text">
            <motion.h1 variants={animateOne}>Hello! I am Abdelbar Benaida</motion.h1>
            <motion.h2 variants={animateOne}>I have a passion for coding</motion.h2>
            <motion.p variants={animateOne}>I am an aspiring Software Developer from the UK. I enjoy building front-end and back-end applications.</motion.p>
        <motion.button variants={animateButton} initial="initial" animate="animate" className="btn">
            <a href={CV} download className="btn" target="_blank" rel="noreferrer">Download CV</a>
        </motion.button>
        {/* <div className="social"> */}
            <motion.a variants={animateStyle} href="https://github.com/Javabar" target="blank" rel="noreferrer" className="social"><BsGithub /></motion.a>
            <motion.a variants={animateStyle} href="https://www.linkedin.com/in/abdelbar-benaida-aa25b982/" target="blank" rel="noreferrer" className="social1"><BsLinkedin /></motion.a>
        {/* </div> */}
        </motion.div>
    </header>
    </div>
               
    )
};

export default Home;















{/* // import profile from "../images/profile.jpg";
// // import "../css/app.css";
// import "../css/home.css";
// import CV from "../files/CV.pdf";

// const Home = () => {
    return ( 
        <section className="bio">

            <img className="ProfilePicture" src={profile} alt="Profile pic" />
   
        <div>
        <h1>Hello! I am Abdelbar Benaida.</h1>
        <h2 className="header2">I love to design &amp; code</h2>
      <p className="intro">I am an aspiring Software Developer from the UK. I enjoy building front-end and back-end applications.</p>
      <a className="btn" href="https://github.com/Javabar" target="blank">GitHub</a>
      <a className="btn" href="https://www.linkedin.com/in/abdelbar-benaida-aa25b982/" target="blank">LinkedIn</a>
      <a className="btn" href={CV} download target="_blank" rel="noreferrer">Download CV</a>
        </div>
        </section>
     );
}
 
export default Home; */}