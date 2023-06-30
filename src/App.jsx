import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/skills'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' bg-black '>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>


    </main>
  )
}

export default App
