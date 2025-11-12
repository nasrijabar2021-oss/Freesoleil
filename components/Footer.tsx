
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
    return (
        <footer className="bg-brand-charcoal text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">FreeSoleil</h3>
                        <p className="text-gray-400 font-sans">Your adventure awaits. Inspiring authentic travel experiences for the modern explorer.</p>
                    </div>
                    <div>
                        <h4 className="font-bold font-heading-alt tracking-wider uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-2 font-sans">
                            <li><Link to="/" className="hover:text-brand-gold transition-colors duration-300">Home</Link></li>
                            <li><Link to="/blog" className="hover:text-brand-gold transition-colors duration-300">Blog</Link></li>
                            <li><Link to="/destinations" className="hover:text-brand-gold transition-colors duration-300">Destinations</Link></li>
                            <li><Link to="/about" className="hover:text-brand-gold transition-colors duration-300">About</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-gold transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold font-heading-alt tracking-wider uppercase mb-4">Follow Us</h4>
                        <p className="text-gray-400 mb-4 font-sans">Get the latest travel inspiration on our social channels.</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 font-sans">
                    <p>&copy; {new Date().getFullYear()} FreeSoleil. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
