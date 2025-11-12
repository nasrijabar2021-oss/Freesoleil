
import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/posts';

export const Destinations = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold font-heading text-brand-charcoal">Destinations</h1>
                    <p className="mt-4 text-lg text-gray-600 font-body max-w-2xl mx-auto">Find your next adventure. Explore blog posts by destination and get inspired to travel the world.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map(category => (
                        <CategoryCard key={category.name} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
};
