import React, { useEffect } from "react";
import "../css/contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin,  } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Contact = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animateContact = useAnimation();

    useEffect(() => {
        if (inView) {
            animateContact.start({
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.75,
                }
            })
        };
        if (!inView) {
            animateContact.start({
                scale: 0.8,
                y: 100,
                opacity: 0
            })
        };
        console.log("useEffect hook, inView = ", inView);
    });

  return (
    <motion.section ref={ref} animate={animateContact}id="Contact" className="contact">
    <section id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-area">
                <section className="contact-type">
                <div className="contact-icons">
                <MdEmail/>
                    <h3>Have you got any questions?</h3>
                    </div>
                    <a href="mailto:abdelbar94@hotmail.co.uk" target="_blank" rel="noopener noreferrer">
                        <button>Send Email</button>
                    </a>
                </section>
                <section className="contact-type">
                    <div className="contact-icons">
                        <BsLinkedin/>
                        <h3>Give my LinkedIn a follow!</h3>
                    </div>
                    <a href="https://www.linkedin.com/in/abdelbar-benaida-aa25b982/" target="_blank" rel="noopener noreferrer">
                        <button>Connect</button>
                    </a>
                </section>
            </div>
        
        <form target="_blank" action="https://formsubmit.co/dee66d99a429ded2835d98f0b952b12a"method="POST">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
    </section>
    </motion.section>
  );
};

export default Contact;