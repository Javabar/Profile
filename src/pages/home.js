import profile from "../images/profile.jpg";
// import "../css/app.css";
import "../css/home.css";

const Home = () => {
    return ( 
        <section className="bio">
            {/* <h1>Home</h1> */}

            <img className="ProfilePicture"
                    src={profile}
                    alt="Profile pic" />
   
        <div>
        <h2>Hello! I am Abdelbar Benaida. </h2>
      <p className="intro">I am an aspiring Software Developer from the UK. I enjoy buidling websites front-end and back-end applications. </p>
      <a className="btn" href="https://github.com/Javabar" target="blank">See my work</a>
        </div>
        </section>
     );
}
 
export default Home;