import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar/>
        <Banner/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>

    </>
  );
}

export default App;
