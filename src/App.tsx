
import { HashRouter } from 'react-router-dom'
import { MotionConfig } from 'motion/react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <div className="portfolio-shell min-h-screen bg-slate-950 text-white">
          {/* Shared navigation */}
          <Navbar />

          {/* All sections share one continuous page. */}
          <main>
            <HomePage />
            <WorkPage />
            <ContactPage />
          </main>

          {/* Shared footer */}
          <Footer />
        </div>
      </HashRouter>
    </MotionConfig>
  )
}

export default App
