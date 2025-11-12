
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { posts, categories } from '../data/posts';

const Sidebar = () => {
    const recentPosts = posts.slice(0, 3);
    
    return (
        <aside className="lg:w-1/3 lg:pl-8 space-y-8">
            {/* Search */}
            <div className="bg-brand-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold font-heading-alt mb-4">Search</h3>
                <div className="relative">
                    <input type="text" placeholder="Search articles..." className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    <button className="absolute right-0 top-0 h-full px-4 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-brand-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold font-heading-alt mb-4">Categories</h3>
                <ul className="space-y-2">
                    {categories.map(category => (
                         <li key={category.name}>
                            <Link to={`/destination/${category.name}`} className="text-gray-700 hover:text-brand-gold transition-colors duration-300 flex justify-between items-center font-body">
                                <span>{category.name}</span>
                                <span className="text-xs font-bold text-gray-400">&gt;</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/blog" className="text-gray-700 hover:text-brand-gold transition-colors duration-300 flex justify-between items-center font-body">
                            <span>Travel Tips</span>
                            <span className="text-xs font-bold text-gray-400">&gt;</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-brand-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold font-heading-alt mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                    {recentPosts.map(post => (
                        <li key={post.id}>
                           <Link to={`/post/${post.slug}`} className="flex items-center group">
                                <img src={post.imageUrl} alt={post.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                                <div>
                                    <h4 className="font-bold text-md leading-tight group-hover:text-brand-gold transition-colors duration-300">{post.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export const Blog = () => {
    const [visiblePosts, setVisiblePosts] = useState(6);

    const loadMorePosts = () => {
        setVisiblePosts(prev => prev + 3);
    };

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold font-heading text-brand-charcoal">Travel Blog</h1>
                    <p className="mt-4 text-lg text-gray-600 font-body max-w-2xl mx-auto">Stories, guides, and inspiration from my travels around the globe.</p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3">
                        <div className="grid md:grid-cols-2 gap-12">
                            {posts.slice(0, visiblePosts).map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                        {visiblePosts < posts.length && (
                             <div className="text-center mt-12">
                                <button onClick={loadMorePosts} className="px-8 py-3 bg-brand-gold text-brand-charcoal font-bold font-heading-alt uppercase tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-300">
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};
