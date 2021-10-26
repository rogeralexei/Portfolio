import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Abilities from "./components/Abilities"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Abilities/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
