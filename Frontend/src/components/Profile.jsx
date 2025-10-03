
import React, { useState, useEffect } from 'react';
import { Upload, FileText, Image, File, X, Plus, LogOut, User, Trash2 } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

function blogs() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState('allBlogs');

  // Auth form state
  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: ''
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Blogs state
  const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchCurrentUser(token);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllBlogs();
      if (view === 'myBlogs') {
        fetchMyBlogs();
      }
    }
  }, [isAuthenticated, view]);

  const fetchCurrentUser = async (token) => {
    try {
      const response = await fetch(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.user);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('token');
      }
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setView('allBlogs');
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const fetchAllBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      if (response.ok) {
        const data = await response.json();
        setBlogs(data.blogs); // use data.blogs (not just data)
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  const fetchMyBlogs = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/blogs/my-blogs`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setMyBlogs(data.blogs); // use data.blogs
      }
    } catch (err) {
      console.error('Error fetching my blogs:', err);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', blogForm.title);
      formData.append('content', blogForm.content);
      selectedFiles.forEach(file => {
        formData.append('files', file);
      });

      const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }, // Do NOT set Content-Type with FormData
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Blog posted successfully!');
        setBlogForm({ title: '', content: '' });
        setSelectedFiles([]);
        fetchAllBlogs();
        setTimeout(() => {
          setView('allBlogs');
          setSuccess('');
        }, 1500);
      } else {
        setError(data.message || 'Failed to create blog');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/blogs/${blogId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        setSuccess('Blog deleted successfully!');
        fetchAllBlogs();
        fetchMyBlogs();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError('Failed to delete blog');
    }
  };

  const getFileIcon = (mimetype) => {
    if (mimetype.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (mimetype === 'application/pdf') return <FileText className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  // ADD LOGIN & SIGNUP LOGIC HERE IF NEEDED, THIS SAMPLE ONLY COVERS LOGGED IN STATE

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Blog Platform</h1>
            <div className="flex items-center gap-4">
              {/* <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <User className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">
                  {currentUser?.name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button> */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setView('allBlogs')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              view === 'allBlogs'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Blogs
          </button>
          <button
            onClick={() => setView('myBlogs')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              view === 'myBlogs'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            My Blogs
          </button>
          <button
            onClick={() => setView('create')}
            className={`px-6 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
              view === 'create'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Plus className="w-5 h-5" />
            Create Blog
          </button>
        </div>

        {/* Content */}
        {view === 'create' && (
          <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Blog</h2>
            <form onSubmit={handleCreateBlog} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter blog title..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Write your blog content..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments (Images, PDFs, etc.)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Click to upload files
                  </label>
                  <p className="text-sm text-gray-500 mt-2">PNG, JPG, PDF up to 10MB</p>
                </div>
                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          {getFileIcon(file.type)}
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024).toFixed(2)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  {success}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {loading ? 'Publishing...' : 'Publish Blog'}
              </button>
            </form>
          </div>
        )}
        {(view === 'allBlogs' || view === 'myBlogs') && (
          <div className="space-y-6">
            {(view === 'allBlogs' ? blogs : myBlogs).length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No blogs yet</h3>
                <p className="text-gray-500">
                  {view === 'myBlogs'
                    ? "You haven't created any blogs yet."
                    : 'No blogs have been posted yet.'}
                </p>
              </div>
            ) : (
              (view === 'allBlogs' ? blogs : myBlogs).map((blog) => (
                <div key={blog._id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{blog.author.name}</span>
                        <span>•</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    {blog.author.id === currentUser?._id && (
                      <button
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap mb-4">{blog.content}</p>
                  {blog.files && blog.files.length > 0 && (
                    <div className="border-t pt-4 mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Attachments:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {blog.files.map((file, index) => (
                          <a
                            key={index}
                            href={`http://localhost:5000${file.path}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                          >
                            {getFileIcon(file.mimetype)}
                            <span className="text-sm text-gray-700 truncate">
                              {file.originalName}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default blogs;
