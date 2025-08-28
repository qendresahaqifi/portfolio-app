import { Moon, Sun } from 'lucide-react';
import React, { useEffect } from 'react';
import { cn } from '../lib/utils';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

  return (
    <button onClick={toggleTheme} className={cn("fixed top-5 right-0 sm:top-5 sm:right-2 md:right-1 md:top-4 lg:right-1 lg:top-3 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}>
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300 cursor-pointer' /> : <Moon className='h-6 w-6 text-blue-900 cursor-pointer' />}
    </button>
  )
}

export default ThemeToggle