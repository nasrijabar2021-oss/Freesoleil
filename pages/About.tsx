
import React from 'react';

export const About = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <img src="https://picsum.photos/id/661/200/200" alt="Alex Soleil" className="mx-auto rounded-full shadow-2xl mb-8" />
                        <h1 className="text-5xl font-extrabold font-heading text-brand-charcoal">About FreeSoleil</h1>
                        <p className="mt-4 text-xl text-gray-600 font-sans">The story behind the adventure.</p>
                    </div>

                    <div className="mt-12 font-body text-lg text-gray-700 space-y-6 leading-relaxed">
                        <p>
                            Hello! I'm Alex Soleil, the face behind FreeSoleil. For as long as I can remember, I've been captivated by the idea of exploring the unknown, meeting new people, and experiencing cultures different from my own. This blog is the culmination of that lifelong passion.
                        </p>
                        <p>
                            FreeSoleil was born from a desire to create a space that not only documents my journeys but also inspires and empowers others to chase their own travel dreams. The name "FreeSoleil" combines "Freedom" and the French word for sun, "Soleil," representing the liberating feeling of exploring under the open sky.
                        </p>
                         <img src="https://picsum.photos/seed/about-travel/1000/600" alt="Travel landscape" className="rounded-lg shadow-lg my-8"/>
                        <h2 className="text-3xl font-bold font-heading-alt pt-4">My Travel Philosophy</h2>
                        <p>
                            I believe that travel is more than just checking destinations off a list. It's about authentic connections, stepping outside your comfort zone, and learning about the world and yourself in the process. I champion responsible and sustainable travel, aiming to leave a positive impact on the places I visit. Whether I'm backpacking through mountains, navigating bustling city streets, or relaxing on a remote beach, I seek experiences that are real and meaningful.
                        </p>
                        <p>
                            Thank you for joining me on this journey. I hope the stories and guides you find here ignite your wanderlust and help you plan your next unforgettable adventure.
                        </p>
                        <p className="font-bold">Happy travels,</p>
                        <p className="font-heading text-2xl">Alex Soleil</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
