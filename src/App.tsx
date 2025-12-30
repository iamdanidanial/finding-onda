import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Destinations from './components/sections/Destinations';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { useDarkMode } from './hooks/useDarkMode';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import FAQ from './components/sections/Faq';
import { useEffect, useState } from 'react';
import InstagramSection from './components/sections/Pricing';
import MaintenanceInfo from './components/sections/MaintenanceInfo';
import Gallery from './components/sections/Gallery';
import StoryGridFindingOnda from './components/sections/Faq';

function App() {
  useSmoothScroll();

 const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const root = window.document.documentElement; // html
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {/* <MaintenanceInfo /> */}
        <Hero />
        <About />
        <Features />
        {/* <Destinations /> */}
        <Gallery />
        {/* <Testimonials /> */}
        <InstagramSection />
        {/* <FAQ />
        <Contact /> */}
        {/* <StoryGridFindingOnda /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
