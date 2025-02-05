import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}
