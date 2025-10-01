
import './App.css'

import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import AlumniDirectory from './components/Alumni'
import Gallery from './components/Gallery'
import BiocratTeamPage from './components/Team'

function App() {


  return (
    <>

      <Home />

      <Events />
      <About />
      <BiocratTeamPage />
      <AlumniDirectory />
      <Gallery />

    </>
  )
}

export default App
