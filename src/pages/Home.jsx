import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { ErrorBoundary } from '../components/ErrorBoundary'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        
        { /* -- Theme Toggle -- */}
        <ThemeToggle />

        { /* -- Background Effects -- */}
        <StarBackground />

        { /* -- Navbar -- */}
        <Navbar />

        { /* -- Main content -- */}
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
        </main>

        { /* -- Footer -- */}
        <Footer />
    </div>
  )
}

export default Home