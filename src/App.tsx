import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
// import { Palette } from './components/Palette'
import { Home } from './components/Sections/Home'
import { About } from './components/Sections/About'
import { Projects } from './components/Sections/Projects'
import { Contact } from './components/Sections/Contact'
import { Footer } from './components/Sections/Footer'
import PixelEntrance from './components/UI/pixelated'

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home": return <Home />;
      case "about": return <About />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className='flex flex-col min-w-screen min-h-screen'>
      <Navbar currentSection={currentSection} onSectionChange={(id) => setCurrentSection(id)}/>
      <main className="relative flex-1 flex flex-col justify-center items-center mt-12 m-auto w-full md:w-23/24 lg:w-11/12 h-full">
        <PixelEntrance triggerKey={currentSection}>
          {renderSection()}
        </PixelEntrance>
        {/* <Palette/> */}
      </main>
      <Footer/>
    </div>
  )
}

export default App

