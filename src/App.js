import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
   <div>
   <NavBar />
   <Home /> 
   <About/>
   <Portfolio/>
   <SocialLinks/>
   <Experience/>
   <Contact/>
   </div>
  );
}

export default App;
