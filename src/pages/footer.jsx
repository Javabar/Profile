import "../css/footer.css";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Built and designed by Abdelbar Benaida</p>
      <p><BiCopyright /> 2022 All rights reserved</p>
      
      <div className="footer-icon">
        <a
          href="https://www.linkedin.com/in/abdelbar-benaida-aa25b982/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Javabar" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;