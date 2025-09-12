import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ClockIcon,
  UserIcon,
  TagIcon,
  CalendarIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { collection, getDocs, orderBy, query, limit, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'oral-health', name: 'Oral Health' },
    { id: 'cosmetic-dentistry', name: 'Cosmetic Dentistry' },
    { id: 'orthodontics', name: 'Orthodontics' },
    { id: 'pediatric-dentistry', name: 'Pediatric Dentistry' },
    { id: 'dental-implants', name: 'Dental Implants' },
    { id: 'general-tips', name: 'General Tips' }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsRef = collection(db, 'blog'); // Changed from 'blogPosts' to 'blog' to match BlogManager
      const q = query(
        postsRef,
        orderBy('createdAt', 'desc'),
        limit(20)
      );
      
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        publishDate: doc.data().createdAt?.toDate() // Changed from publishDate to createdAt
      }));
      
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
  <section className="bg-primary-50 text-gray-900 py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Our <span className="text-secondary-400">Learning Hub</span>
            </h1>
            <p className="text-xl text-primary-500 leading-relaxed">
              Discover expert tips, latest trends, and valuable insights about oral health 
              and dental care from our experienced team of dental professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
                Featured <span className="text-primary-500">Articles</span>
              </h2>
              <p className="text-xl text-gray-600">
                Don't miss these important insights from our dental experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-48 overflow-hidden">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          console.log("Image failed to load:", post.imageUrl);
                          e.target.onerror = null;
                          e.target.src = "/images/star-dental-logo.jpeg"; // Fallback image
                        }}
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">Star Dental</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{post.publishDate?.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TagIcon className="w-4 h-4" />
                        <span className="capitalize">{post.category?.replace('-', ' ')}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + '...'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <UserIcon className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ChevronRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <motion.div 
                className="text-center mb-12"
                data-aos="fade-up"
              >
                <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
                  Latest <span className="text-primary-500">Articles</span>
                </h2>
                <p className="text-xl text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="h-40 overflow-hidden">
                      {post.imageUrl ? (
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-500">Star Dental</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{post.publishDate?.toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>
                      
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full mb-3 capitalize">
                        {post.category?.replace('-', ' ')}
                      </span>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {post.excerpt || post.content.substring(0, 120) + '...'}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <UserIcon className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.id}`}
                          className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1 text-sm"
                        >
                          <span>Read More</span>
                          <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <motion.div 
            className="text-center text-white max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins mb-6">
              Stay Updated with Our <span className="text-secondary-400">Latest Tips</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter and get the latest dental health tips, 
              treatment updates, and special offers delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-secondary-400"
                required
              />
              <button
                type="submit"
                className="btn-secondary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-primary-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
