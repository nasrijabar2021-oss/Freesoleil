
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';

const NavLinks = () => (
    <>
        <NavLink to="/" className={({ isActive }) => `py-2 px-3 block rounded-md text-sm font-medium ${isActive ? 'bg-brand-gold text-brand-charcoal' : 'text-gray-600 hover:bg-gray-100'}`} end>Home</NavLink>
        <NavLink to="/blog" className={({ isActive }) => `py-2 px-3 block rounded-md text-sm font-medium ${isActive ? 'bg-brand-gold text-brand-charcoal' : 'text-gray-600 hover:bg-gray-100'}`}>Blog</NavLink>
        <NavLink to="/destinations" className={({ isActive }) => `py-2 px-3 block rounded-md text-sm font-medium ${isActive ? 'bg-brand-gold text-brand-charcoal' : 'text-gray-600 hover:bg-gray-100'}`}>Destinations</NavLink>
        <NavLink to="/about" className={({ isActive }) => `py-2 px-3 block rounded-md text-sm font-medium ${isActive ? 'bg-brand-gold text-brand-charcoal' : 'text-gray-600 hover:bg-gray-100'}`}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `py-2 px-3 block rounded-md text-sm font-medium ${isActive ? 'bg-brand-gold text-brand-charcoal' : 'text-gray-600 hover:bg-gray-100'}`}>Contact</NavLink>
    </>
);

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-3xl font-extrabold font-heading text-brand-charcoal tracking-wider">
                            FreeSoleil
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        <nav className="flex space-x-1">
                          <NavLinks />
                        </nav>
                        <div className="pl-4">
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-charcoal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLinks />
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex justify-center">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
