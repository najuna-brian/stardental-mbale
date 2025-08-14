import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ShareIcon,
  ChevronLeftIcon,
  HeartIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import { doc, getDoc, collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost();
      fetchRelatedPosts();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const postDoc = await getDoc(doc(db, 'blogPosts', id));
      if (postDoc.exists()) {
        setPost({
          id: postDoc.id,
          ...postDoc.data(),
          publishDate: postDoc.data().publishDate?.toDate()
        });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async () => {
    try {
      const postsRef = collection(db, 'blogPosts');
      const q = query(
        postsRef,
        where('status', '==', 'published'),
        orderBy('publishDate', 'desc'),
        limit(4)
      );
      
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs
        .filter(doc => doc.id !== id)
        .slice(0, 3)
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
          publishDate: doc.data().publishDate?.toDate()
        }));
      
      setRelatedPosts(postsData);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || post.content.substring(0, 160),
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50">
        <div className="container-custom">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.article data-aos="fade-up">
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-6 capitalize">
              {post.category?.replace('-', ' ')}
            </span>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <UserIcon className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <CalendarIcon className="w-5 h-5" />
                <span>{post.publishDate?.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span>5 min read</span>
              </div>

              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium ml-auto"
              >
                <ShareIcon className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-12">
              <span className="text-primary-600 text-lg font-medium">Article Featured Image</span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div 
            className="prose prose-lg max-w-none"
            data-aos="fade-up"
          >
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br><br>') 
              }}
            />
          </motion.div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Author Bio */}
          <motion.div 
            className="mt-12 p-8 bg-gray-50 rounded-xl"
            data-aos="fade-up"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.author} is a experienced dental professional at Star Dental Clinic Mbale, 
                  dedicated to providing exceptional patient care and sharing valuable insights 
                  about oral health and dental treatments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Engagement Actions */}
          <motion.div 
            className="mt-12 flex items-center justify-center space-x-8 py-8 border-t border-gray-200"
            data-aos="fade-up"
          >
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
              <HeartIcon className="w-6 h-6" />
              <span>Like this article</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors">
              <ChatBubbleLeftIcon className="w-6 h-6" />
              <span>Leave a comment</span>
            </button>
            
            <button 
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <ShareIcon className="w-6 h-6" />
              <span>Share article</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
                Related <span className="text-primary-500">Articles</span>
              </h2>
              <p className="text-xl text-gray-600">
                Continue reading these related topics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Article Image</span>
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full mb-3 capitalize">
                      {relatedPost.category?.replace('-', ' ')}
                    </span>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {relatedPost.excerpt || relatedPost.content.substring(0, 120) + '...'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{relatedPost.publishDate?.toLocaleDateString()}</span>
                      </div>
                      
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-primary-500 hover:text-primary-600 font-medium text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/blog" className="btn-primary">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <motion.div 
            className="text-center text-white max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold font-poppins mb-6">
              Ready to Improve Your <span className="text-secondary-400">Oral Health?</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule an appointment with our expert team and start your journey 
              to better oral health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-secondary">
                Book Appointment
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
