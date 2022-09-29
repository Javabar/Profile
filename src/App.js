import "./App.css"
import Home from "./pages/home"
import About from "./pages/about";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import FooterBanner from "./pages/footer"


const App = () => {
  return ( 
    <div className="app">
      <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <FooterBanner />
      </div>
      </div>
    
    
   );
}
 
export default App;