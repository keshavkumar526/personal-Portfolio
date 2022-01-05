import "./App.css"
import Home from "./components/Home";
import About from "./components/About/about";
import Skill from "./components/Skills/skill";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/About/footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
