
import React from 'react';
import { useParams } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { posts } from '../data/posts';

export const CategoryPage = () => {
    const { category } = useParams();
    const filteredPosts = posts.filter(p => p.category.toLowerCase() === category?.toLowerCase());

    return (
         <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold font-heading text-brand-charcoal">{category}</h1>
                    <p className="mt-4 text-lg text-gray-600 font-body max-w-2xl mx-auto">
                        {`Discover stories and guides from my travels in ${category}.`}
                    </p>
                </div>
                {filteredPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPosts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-500">No posts found for this category yet. Check back soon!</p>
                )}
            </div>
        </div>
    );
};
