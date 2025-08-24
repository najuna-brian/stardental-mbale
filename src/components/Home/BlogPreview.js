import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import { blogService } from '../../firebase/firestore';

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const recentPosts = await blogService.getRecentPosts(3);
        setPosts(recentPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback to sample data
        setPosts(samplePosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    // samplePosts is a static constant; safe to ignore for deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sample posts for fallback
  const samplePosts = [
    {
      id: '1',
      title: '5 Essential Tips for Daily Oral Hygiene',
      excerpt: 'Learn the fundamental practices that will keep your teeth and gums healthy every day.',
      category: 'Oral Hygiene',
      author: 'Dentist Charity',
      date: '2024-08-10',
      readTime: '5 min read',
      image: '/images/blog/oral-hygiene.jpg'
    },
    {
      id: '2',
      title: 'Understanding Teeth Whitening: What You Need to Know',
      excerpt: 'Discover the different whitening options available and which one might be right for you.',
      category: 'Cosmetic Dentistry',
      author: 'Dentist Leonard',
      date: '2024-08-08',
      readTime: '7 min read',
      image: '/images/blog/teeth-whitening.jpg'
    },
    {
      id: '3',
      title: 'Making Dental Visits Fun for Kids',
      excerpt: 'Tips and strategies to help your children feel comfortable and excited about dental care.',
      category: 'Pediatric Care',
      author: 'Dentist Charity',
      date: '2024-08-05',
      readTime: '4 min read',
      image: '/images/blog/kids-dental.jpg'
    }
  ];

  const postsToShow = posts.length > 0 ? posts : samplePosts;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
            Learning <span className="text-primary-500">Hub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles, tips, and insights about oral health 
            and dental care from our expert team.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {postsToShow.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Featured Image */}
                  <div className="relative h-48 bg-primary-50 overflow-hidden">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-primary-600 font-medium">Blog Image</span>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-primary-500 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <UserIcon className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{new Date(post.date || post.createdAt?.toDate()).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span className="font-medium">{post.readTime || '5 min read'}</span>
                    </div>
                    
                    {/* Read More Link */}
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-medium group"
                    >
                      <span>Read More</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Categories */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg mb-12"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Explore by <span className="text-primary-500">Category</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Oral Hygiene', 'Treatments', 'Kids Tips', 'Prevention'].map((category) => (
                  <Link
                    key={category}
                    to={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}
                    className="bg-primary-50 hover:bg-primary-100 text-primary-600 px-4 py-3 rounded-lg text-center font-medium transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="text-center"
              data-aos="fade-up"
            >
              <Link 
                to="/blog" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Visit Learning Hub</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
