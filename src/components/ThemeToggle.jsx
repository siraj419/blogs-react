import { Moon, Sun } from 'lucide-react';
import React, { use, useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');    
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        }
    }, []);

    return (
        <button className="p-2 border rounded-full border-gray-400 text-black dark:text-white" onClick={toggleTheme}>
            {
                theme === 'light' ? <Moon /> : <Sun />
            }
        </button>
    )
}

export default ThemeToggle