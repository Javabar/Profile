import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import FooterBanner from "./pages/footer"


const App = () => {
  return ( 
    <div>
      
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            
            
          </Routes>
          <FooterBanner />
      </BrowserRouter>
 
    </div>
    
   );
}
 
export default App;