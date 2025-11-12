
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
    category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <Link to={`/destination/${category.name}`} className="relative h-64 rounded-lg overflow-hidden group">
            <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold font-heading tracking-wider uppercase">{category.name}</h3>
            </div>
        </Link>
    );
};
