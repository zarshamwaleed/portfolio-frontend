import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag, User, ChevronDown, Filter } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Web Development', 'Design', 'Technology', 'Career', 'Tutorials'];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices and Patterns",
      excerpt: "Discover the essential patterns and practices that help create maintainable and scalable React applications for enterprise-level projects.",
      category: "Web Development",
      date: "2025-01-15",
      readTime: "8 min read",
      author: "Your Name",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      tags: ["React", "JavaScript", "Architecture", "Best Practices"],
      featured: true
    },
    {
      id: 2,
      title: "The Future of User Interface Design: Emerging Trends in 2025",
      excerpt: "Explore the cutting-edge design trends shaping the future of digital interfaces and user experiences in the modern web.",
      category: "Design",
      date: "2025-01-12",
      readTime: "6 min read",
      author: "Your Name",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
      tags: ["UI/UX", "Design Trends", "Innovation"],
      featured: false
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox: A Complete Guide",
      excerpt: "Learn how to create complex, responsive layouts using modern CSS layout techniques with practical examples and real-world applications.",
      category: "Tutorials",
      date: "2025-01-10",
      readTime: "12 min read",
      author: "Your Name",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      featured: false
    },
    {
      id: 4,
      title: "Optimizing Web Performance: Core Web Vitals and Beyond",
      excerpt: "Deep dive into web performance optimization techniques that improve user experience and search engine rankings.",
      category: "Technology",
      date: "2025-01-08",
      readTime: "10 min read",
      author: "Your Name",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Performance", "SEO", "Web Vitals"],
      featured: false
    },
    {
      id: 5,
      title: "From Junior to Senior: Navigating Your Development Career",
      excerpt: "Insights and strategies for advancing your career in software development, from technical skills to leadership qualities.",
      category: "Career",
      date: "2025-01-05",
      readTime: "7 min read",
      author: "Your Name",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      tags: ["Career", "Growth", "Leadership"],
      featured: false
    },
    {
      id: 6,
      title: "Building Accessible Web Applications: A Developer's Guide",
      excerpt: "Learn how to create inclusive web applications that work for everyone, following WCAG guidelines and best practices.",
      category: "Web Development",
      date: "2025-01-03",
      readTime: "9 min read",
      author: "Your Name",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
      tags: ["Accessibility", "WCAG", "Inclusive Design"],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and technology
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Category Filters */}
            <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-auto`}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-blue-600 font-medium">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-slate-500 text-xs">+{post.tags.length - 2} more</span>
                  )}
                </div>
                
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-slate-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
              Load More Articles
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 text-lg mb-8">
            Get the latest articles and insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;