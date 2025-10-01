
import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import AlumniDirectory from './components/Alumni'
import Gallery from './components/Gallery'
import BiocratTeamPage from './components/Team'
import ContactUs from './components/Contact'
function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const navbarHeight = 80 // Adjust based on your navbar height
          const targetPosition = targetElement.offsetTop - navbarHeight

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add click event listener to all anchor links
    document.addEventListener('click', handleSmoothScroll)

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
    }
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="team">
          <BiocratTeamPage />
        </section>

        <section id="alumni">
          <AlumniDirectory />
        </section>

        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
    </>
  )
}

export default App