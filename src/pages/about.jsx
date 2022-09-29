import React, { useEffect } from "react";
import "../css/about.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animateAbout = useAnimation();

    useEffect(() => {
        if (inView) {
            animateAbout.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.75,
                    staggerChildren: 0.2,
                }
            })
        };
        if (!inView) {
            animateAbout.start({
                x: -100,
                opacity: 0
            })
        };
        console.log("useEffect hook, inView = ", inView);
    });



    return (
        <motion.section 
            ref={ref} animate={animateAbout} id="About" className="about"
        >
            <div>
            <h1>Engineer turned Developer</h1>
            <h3>Profile</h3>
            <p className="profile">Becoming a developer is a fairly recent aspiration of mine, I have always been interested in technology from a young age where I created a YouTube channel reviewing technology gadgets. I was always fascinated by how websites and games work but I never truly delved into the requirements to enter these roles..</p>
            <h3>Experience</h3>
            <p className="experience">Recently, I completed Master Bootcamp IT Level 4 at Code Nation, I am keen and passionate to explore and learn more about other programming languages and skills. I have started looking into C#.</p>
            <h3>Goals</h3>
            <p className="goals">I am looking for a challenging new opportunity to kickstart my career in coding within the software development industry. I want to utilise my existing skills and advance my knowledge in the industry.</p>
        </div>
        </motion.section>
    )
};

export default About;
