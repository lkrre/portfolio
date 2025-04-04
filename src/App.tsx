import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Palette } from './components/Palette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Palette/>
      <div className='flex'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-pine-green'>Vite + React</h1>
      <div className="card text-moss-green">
        <button className='' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-raspberry'>
          Edit <span className='text-dodger-blue'>src/App.tsx</span> and save to test HMR
        </p>
      </div>
      <p className="text-sunglow">
        Click on the Vite and <span className='text-light-sky-blue'>React</span> logos to learn more
      </p>
    </>
  )
}

export default App

