import './App.css';
import TopMenuBar from './components/TopMenuBar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Blog from './components/Blog';
import Hero from './components/Hero';
import Facts from './components/Facts';
import Portfolio from './components/Portfolio';
import KeepInTouch from './components/KeepInTouch';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopMenuBar />
        <Hero />
        <AboutMe />
        <Services />
        <Facts />
        <Portfolio />
        <Testimonials/>
        <Blog/>
        <KeepInTouch />
        <Footer />
      </header>
    </div>
  );
}

export default App;
