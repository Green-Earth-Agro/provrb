import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Technology } from './components/Technology'
import { WhyProvrb } from './components/WhyProvrb'
import { Markets } from './components/Markets'
import { WhyLuxembourg } from './components/WhyLuxembourg'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Technology />
        <WhyProvrb />
        <Markets />
        <WhyLuxembourg />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
