import { ArrowUp, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8'>
      <div className="container flex flex-wrap justify-between items-center">
        <p>&copy; {new Date().getFullYear()}, Qendresa Haqifi</p>
        <div className="flex gap-3">
          <a href="https://www.github.com/qendresahaqifi/" target="_blank" className='hover:text-primary'><Github size={20} /></a>
          <a href="https://vercel.com/qendresa-haqifis-projects" className='hover:text-primary'><ExternalLink size={20} /></a>
        </div>
      </div>
      <a href='#hero' className='absolute top-6 right-5 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}

export default Footer