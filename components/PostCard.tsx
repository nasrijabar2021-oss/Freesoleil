
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="bg-white overflow-hidden group">
            <div className="overflow-hidden">
                <Link to={`/post/${post.slug}`}>
                    <img className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={post.imageUrl} alt={post.title} />
                </Link>
            </div>
            <div className="p-1 pt-4">
                <p className="text-brand-gold text-sm font-bold font-sans uppercase tracking-wider mb-2">
                    <Link to={`/destination/${post.category}`} className="hover:underline">{post.category}</Link>
                </p>
                <h3 className="text-2xl font-bold font-heading-alt leading-tight text-brand-charcoal mb-2">
                    <Link to={`/post/${post.slug}`} className="hover:text-brand-gold transition-colors duration-300">{post.title}</Link>
                </h3>
                <p className="font-body text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                    <img className="h-10 w-10 rounded-full mr-3" src={post.author.avatarUrl} alt={post.author.name} />
                    <div>
                        <span className="font-semibold">{post.author.name}</span>
                        <span className="mx-1">&middot;</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
