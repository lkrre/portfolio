import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Palette } from './components/Palette'
import { Home } from './components/Sections/Home'
import { About } from './components/Sections/About'
import { Projects } from './components/Sections/Projects'
import { Contact } from './components/Sections/Contact'

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
    <>
      <Navbar onSectionChange={(id) => setCurrentSection(id)} />
      <div id="Content" className='mx-4 md:mx-8 xl:mx-16'>
        {/* <PixelTransition key={currentSection}> */}
        <div>
          {renderSection()}
        </div>
        {/* </PixelTransition> */}
        {/* <Palette/>
        <div className='flex'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
      </div>
    </>
  )
}

export default App

