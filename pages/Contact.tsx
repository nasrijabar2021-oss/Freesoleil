
import React from 'react';
import { SocialIcons } from '../components/SocialIcons';

export const Contact = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold font-heading text-brand-charcoal">Get In Touch</h1>
                        <p className="mt-4 text-lg text-gray-600 font-body">Have a question, a collaboration idea, or just want to say hi? I'd love to hear from you!</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/2 bg-brand-light-gray p-8 rounded-lg">
                             <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-brand-charcoal mb-2">Name</label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-brand-charcoal mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-brand-charcoal mb-2">Message</label>
                                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold" required></textarea>
                                </div>
                                <button type="submit" className="w-full px-8 py-3 bg-brand-gold text-brand-charcoal font-bold font-heading-alt uppercase tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="md:w-1/2 font-body text-gray-700">
                           <img src="https://picsum.photos/seed/contact-img/600/400" alt="Traveler with a map" className="rounded-lg shadow-md mb-8" />
                            <h3 className="text-2xl font-bold font-heading-alt mb-4">Connect on Social Media</h3>
                            <p className="mb-4">
                                The quickest way to see my latest adventures is by following me on social media. Feel free to send a DM!
                            </p>
                            <div className="flex space-x-4">
                               <SocialIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
