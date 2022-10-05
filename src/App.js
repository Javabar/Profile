import "./App.css"
import Home from "../src/pages/home"
import About from "../src/pages/about"
import Projects from "../src/pages/projects"
import Contact from "../src/pages/contact"
import Navbar from "../src/components/navbar";
import FooterBanner from "../src/pages/footer";


const App = () => {
  return ( 
    <div className="app">

    <div className="container">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <FooterBanner/>
    </div>

    </div>
    
    
   );
}
 
export default App;