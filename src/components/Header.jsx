import React, { useState } from 'react'
import { navLinks } from '../data/data'
import { Menu,X } from 'lucide-react'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-40 py-6 bg-white w-full ">
        <div className="container flex items-center justify-between relative">
            {/* logo */}
            <a href="#">
                <img src="/images/Logo.png" alt="logo" />
            </a>

            {/* Mobile menu */}
            <ul className={`navbar ${isOpen ? 'active' : ''}`}>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={link.href} className='hover:text-purple-700 transition-colors font-semibold'>{link.label}</a>
                    </li>
                ))}
                <a href="#download-app" className="primary-btn">Download App</a>
            </ul>

            {/* Lg menu */}
            <ul className="hidden md:flex gap-10">
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={link.href} className='hover:text-purple-700 transition-colors font-semibold'>{link.label}</a>
                    </li>
                ))}
            </ul>

            <button className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            <a href="#download-app" className="hidden md:block primary-btn">Download App</a>
        </div>
    </header>
  )
}

export default Header