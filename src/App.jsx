import { useRef } from 'react'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Technologies from './components/Technologies/Technologies'
import Projects from './components/Projects/Projects'


function App() {
  const homeRef = useRef(null)
  const techRef = useRef(null)
  const projRef = useRef(null)
  return (
    <>

      <Nav homeRef={homeRef} techRef={techRef} projRef={projRef}/>
      <div id='home' ref={homeRef}>
        <Home/>
      </div>

      <div id='tech' ref={techRef}>
        <Technologies/>
      </div>

      <div id='proj' ref={projRef}>
        <Projects/>
      </div>
    </>
  )
}

export default App
