import { useRef } from 'react'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Technologies from './components/Technologies/Technologies'


function App() {
  const homeRef = useRef(null)
  const techRef = useRef(null)
  return (
    <>

      <Nav homeRef={homeRef} techRef={techRef}/>
      <div ref={homeRef}>
        <Home/>
      </div>

      <div ref={techRef}>
        <Technologies/>
      </div>
    </>
  )
}

export default App
