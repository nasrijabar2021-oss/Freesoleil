
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';


const SocialShareButtons = () => (
    <div className="flex items-center space-x-4">
        <span className="font-bold text-gray-600">Share:</span>
         <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.344-.595-2.2-2.647-2.2-4.21 0-3.41 2.51-6.205 6.951-6.205 3.665 0 6.207 2.599 6.207 5.787 0 3.51-2.215 6.328-5.19 6.328-1.018 0-1.986-.52-2.295-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.96.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
        </a>
    </div>
);


export const PostDetail = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return <div className="text-center py-20">Post not found!</div>;
    }
    
    const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

    return (
        <article>
            <div className="relative h-[60vh] min-h-[400px]">
                <img src={post.imageUrl} alt={post.title} className="absolute h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
                    <Link to={`/destination/${post.category}`} className="text-brand-gold font-bold font-sans uppercase tracking-widest mb-4 hover:underline">{post.category}</Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold font-heading max-w-4xl">{post.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-8 border-b pb-4">
                        <div className="flex items-center text-sm text-gray-500">
                            <img className="h-12 w-12 rounded-full mr-4" src={post.author.avatarUrl} alt={post.author.name} />
                            <div>
                                <p className="font-bold text-base text-brand-charcoal">{post.author.name}</p>
                                <p>{post.date}</p>
                            </div>
                        </div>
                        <SocialShareButtons />
                    </div>

                    <div className="prose lg:prose-xl max-w-none font-body text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>

                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-3xl font-bold font-heading-alt mb-8 text-center">You Might Also Like</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                           {relatedPosts.map(p => <PostCard key={p.id} post={p} />)}
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-3xl font-bold font-heading-alt mb-8 text-center">Comments</h3>
                        <div className="bg-brand-light-gray p-8 rounded-lg text-center">
                            <p className="text-gray-600">Comments section (e.g., Disqus integration) would go here.</p>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};
