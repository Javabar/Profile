import "./App.css"
import Home from "../src/pages/home"
import About from "../src/pages/about"
import Project from "../src/pages/projects"
import Navbar from "../src/components/navbar";
import FooterBanner from "../src/pages/footer";


const App = () => {
  return ( 
    <div className="app">

    <div className="container">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <FooterBanner />
    </div>

    </div>
    
    
   );
}
 
export default App;