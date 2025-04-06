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
      <Navbar onSectionChange={(id) => setCurrentSection(id)}/>
      <main className="flex-1 flex flex-col justify-center items-center pt-12 mx-4 md:mx-16 xl:mx-32">
        {/* <PixelTransition key={currentSection}> */}
        <div className=''>
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
      </main>
      <footer className='self-center'>
        a
      </footer>
    </>
  )
}

export default App

