
import React from 'react';
import { Link } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { CategoryCard } from '../components/CategoryCard';
import { posts, categories } from '../data/posts';

export const Home = () => {
    const featuredPosts = posts.slice(0, 3);
    const destinationCategories = categories.slice(0, 4);
    const instagramImages = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/insta${i + 1}/400/400`);

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[500px] text-white">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <img src="https://picsum.photos/seed/hero/1920/1080" className="absolute inset-0 w-full h-full object-cover" alt="Breathtaking travel scene" />
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-black font-heading tracking-widest uppercase">FreeSoleil</h1>
                    <p className="text-xl md:text-2xl mt-4 font-light">Your Adventure Awaits.</p>
                    <Link to="/destinations" className="mt-8 px-8 py-4 bg-brand-gold text-brand-charcoal font-bold font-heading-alt uppercase tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-300">
                        Explore Destinations
                    </Link>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold font-heading-alt text-center mb-12">Latest Adventures</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {featuredPosts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Destination Categories */}
            <section className="py-20 bg-brand-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold font-heading-alt text-center mb-12">Choose Your Destination</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destinationCategories.map(category => (
                            <CategoryCard key={category.name} category={category} />
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/destinations" className="px-8 py-3 bg-brand-charcoal text-white font-bold font-heading-alt uppercase tracking-wider rounded-full hover:bg-gray-700 transition-colors duration-300">
                            See All Destinations
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Me Snippet */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            <img src="https://picsum.photos/id/237/400/400" alt="Alex Soleil" className="rounded-full shadow-lg mx-auto" />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="text-4xl font-bold font-heading-alt mb-4">Hi, I'm Alex Soleil</h2>
                            <p className="font-body text-lg text-gray-600 mb-6">
                                A passionate explorer with an insatiable curiosity for the world. I created FreeSoleil to share my adventures and inspire you to embark on your own. Let's discover the beauty of our planet together.
                            </p>
                            <Link to="/about" className="px-8 py-3 bg-brand-gold text-brand-charcoal font-bold font-heading-alt uppercase tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-300">
                                More About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Newsletter Subscription */}
            <section className="py-20 bg-brand-gold">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-charcoal">
                    <h2 className="text-4xl font-bold font-heading-alt mb-2">Join the Adventure!</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">Subscribe to my newsletter for exclusive travel tips, stories, and updates straight to your inbox.</p>
                    <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Your Email Address" className="flex-grow px-6 py-4 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-brand-charcoal" required />
                        <button type="submit" className="px-8 py-4 bg-brand-charcoal text-white font-bold font-heading-alt uppercase tracking-wider rounded-full hover:bg-gray-700 transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Instagram Feed */}
            <section className="py-20 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold font-heading-alt mb-2">Follow on Instagram</h2>
                    <a href="#" className="text-brand-gold text-lg mb-8 inline-block">@freesoleil.travel</a>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {instagramImages.map((src, index) => (
                             <a href="#" key={index} className="overflow-hidden group">
                                <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-300"/>
                            </a>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
};
