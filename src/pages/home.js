import profile from "../images/profile.jpg";
// import "../css/app.css";
import "../css/home.css";
import CV from "../files/CV.pdf";

const Home = () => {
    return ( 
        <section className="bio">

            <img className="ProfilePicture" src={profile} alt="Profile pic" />
   
        <div>
        <h1>Hello! I am Abdelbar Benaida.</h1>
      <p className="intro">I am an aspiring Software Developer from the UK. I enjoy building websites front-end and back-end applications.</p>
      <a className="btn" href="https://github.com/Javabar" target="blank">GitHub</a>
      <a className="btn" href="https://www.linkedin.com/in/abdelbar-benaida-aa25b982/" target="blank">LinkedIn</a>
      <a className="btn" href={CV} download target="_blank" rel="noreferrer">Download CV</a>
        </div>
        </section>
     );
}
 
export default Home;