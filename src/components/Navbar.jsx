import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    {name: 'Home', href: '#hero'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
];

const Navbar = () => {
    const  [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-lg shadow-xs" : "py-5")}>
        <div className="container flex items-center justify-between">
            <a href='#hero' className='text-xl font-bold text-primary flex items-center' >
                <span className="relative z-10">
                    <span className='text-glow text-foreground'>Qendresa's</span> Portfolio
                </span>
            </a>

            { /* -- desktop nav -- */}
            <div className='hidden md:flex space-x-8 mr-5 lg:mr-0'>
                {navItems.map((item, key) => {
                    return <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300' >
                        {item.name}
                    </a>
                })}
            </div>


            { /* -- mobile nav -- */}
            <button 
            onClick={() => setIsMenuOpen((prev) => !prev)} 
            className='cursor-pointer md:hidden p-2 text-foreground z-60'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} 
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center ", 
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                isScrolled ? "min-h-screen" : "pt-0"
            )}
                >
                <div className='flex flex-col space-y-8 text-xl'>
                    {navItems.map((item, key) => {
                        return <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300' onClick={() => setIsMenuOpen(false)} >
                            {item.name}
                        </a>
                    })}
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar