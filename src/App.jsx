import { useRef } from 'react'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Technologies from './components/Technologies/Technologies'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css';
import Footer from './components/Footer/Footer'


function App() {
  const homeRef = useRef(null)
  const techRef = useRef(null)
  const projRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <>

      <Nav homeRef={homeRef} techRef={techRef} projRef={projRef} contactRef={contactRef} />
      <div id='home' ref={homeRef}>
        <Home />
      </div>

      <div id='tech' ref={techRef}>
        <Technologies />
      </div>

      <div id='proj' ref={projRef}>
        <Projects />
      </div>

      <div id='contact' ref={contactRef}>
        <Contact />
      </div>

      <div id='socialMedia'>
        <Footer />
      </div>
    </>
  )
}

export default App
