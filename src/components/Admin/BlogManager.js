import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { blogService } from '../../firebase/firestore';
import toast from 'react-hot-toast';

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await blogService.getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (post = null) => {
    setEditingPost(post);
    setIsModalOpen(true);
    
    if (post) {
      // Populate form with existing data
      setValue('title', post.title);
      setValue('excerpt', post.excerpt);
      setValue('content', post.content);
      setValue('category', post.category);
      setValue('author', post.author);
      setValue('readTime', post.readTime);
    } else {
      reset();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
    reset();
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const postData = {
        ...data,
        published: true
      };

      if (editingPost) {
        await blogService.updatePost(editingPost.id, postData);
        toast.success('Blog post updated successfully!');
      } else {
        await blogService.addPost(postData);
        toast.success('Blog post created successfully!');
      }
      
      closeModal();
      fetchPosts();
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Failed to save blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  const deletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await blogService.deletePost(id);
        toast.success('Blog post deleted successfully!');
        fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error('Failed to delete blog post');
      }
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Unknown';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const categories = [
    'Oral Hygiene',
    'Treatments',
    'Kids Tips',
    'Prevention',
    'Cosmetic Dentistry',
    'General Health',
    'Clinic News'
  ];

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
            <p className="text-gray-600">Manage your learning hub content</p>
          </div>
          <button
            onClick={() => openModal()}
            className="btn-primary flex items-center space-x-2"
          >
            <PlusIcon className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PlusIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
            <p className="text-gray-600 mb-6">Create your first blog post to get started.</p>
            <button
              onClick={() => openModal()}
              className="btn-primary"
            >
              Create First Post
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="p-6 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        {post.title}
                      </h3>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>By {post.author}</span>
                      <span>{formatDate(post.createdAt)}</span>
                      <span>{post.readTime || '5 min read'}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                      className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
                      title="View Post"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => openModal(post)}
                      className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                      title="Edit Post"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                      title="Delete Post"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('title', { required: 'Title is required' })}
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      className="form-input"
                      {...register('category', { required: 'Category is required' })}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Author *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('author', { required: 'Author is required' })}
                    />
                    {errors.author && (
                      <p className="mt-1 text-sm text-red-600">{errors.author.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Read Time
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="5 min read"
                      {...register('readTime')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    className="form-textarea h-20"
                    placeholder="Brief description of the blog post..."
                    {...register('excerpt', { required: 'Excerpt is required' })}
                  ></textarea>
                  {errors.excerpt && (
                    <p className="mt-1 text-sm text-red-600">{errors.excerpt.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    className="form-textarea h-64"
                    placeholder="Write your blog post content here..."
                    {...register('content', { required: 'Content is required' })}
                  ></textarea>
                  {errors.content && (
                    <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
                  )}
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-4 h-4"></div>
                        <span>{editingPost ? 'Updating...' : 'Creating...'}</span>
                      </>
                    ) : (
                      <span>{editingPost ? 'Update Post' : 'Create Post'}</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
