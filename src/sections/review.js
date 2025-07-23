import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Star, ThumbsUp, Plus, Calendar, Verified, Quote, Search, TrendingUp,
} from 'lucide-react';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    company: '',
    rating: 0,
    review: '',
    project: '',
  });

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reviews');
      setReviews(res.data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => {
    const count = reviews.filter((review) => review.rating === rating).length;
    return {
      rating,
      count,
      percentage: totalReviews > 0 ? (count / totalReviews) * 100 : 0,
    };
  });

  const handleStarClick = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (newReview.rating === 0) return;

    const reviewToPost = {
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      avatar: newReview.name.split(' ').map((n) => n[0]).join('').toUpperCase(),
      helpful: 0,
      verified: false,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/reviews', reviewToPost);
      setReviews((prev) => [res.data, ...prev]);
      setNewReview({ name: '', role: '', company: '', rating: 0, review: '', project: '' });
      setShowReviewForm(false);
    } catch (err) {
      console.error('Error submitting review:', err.message);
    }
  };

  const handleHelpfulClick = async (id, helpfulCount) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/reviews/${id}/helpful`, {
        helpful: helpfulCount + 1,
      });

      setReviews((prev) =>
        prev.map((review) => (review._id === id ? res.data : review))
      );
    } catch (err) {
      console.error('Failed to update helpful count:', err.message);
    }
  };

  const filteredReviews = reviews
    .filter((review) => filterRating === 'all' || review.rating === parseInt(filterRating))
    .filter(
      (review) =>
        review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.review.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'highest') return b.rating - a.rating;
      if (sortBy === 'helpful') return b.helpful - a.helpful;
      return 0;
    });

  const StarRating = ({ rating, size = 'w-5 h-5', interactive = false, onStarClick = null }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          } ${interactive ? 'cursor-pointer hover:text-yellow-400 transition-colors' : ''}`}
          onClick={() => interactive && onStarClick && onStarClick(star)}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Quote className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">getFeedback()</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover what clients say about their experience working with us
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">{averageRating.toFixed(1)}</div>
              <StarRating rating={Math.round(averageRating)} />
              <div className="text-sm text-slate-600 mt-2">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">{totalReviews}</div>
              <TrendingUp className="w-6 h-6 text-green-500 mx-auto" />
              <div className="text-sm text-slate-600 mt-2">Total Reviews</div>
            </div>
            <div className="space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 w-12">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-600 w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search reviews..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
            >
              <option value="all">All Ratings</option>
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 && 's'}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <form onSubmit={handleSubmitReview} className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Share Your Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['name', 'role', 'company'].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}${field === 'name' ? ' *' : ''}`}
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={newReview[field]}
                  onChange={(e) => setNewReview((prev) => ({ ...prev, [field]: e.target.value }))}
                  required={field === 'name'}
                />
              ))}
            </div>
            <input
              type="text"
              placeholder="Project Name"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={newReview.project}
              onChange={(e) => setNewReview((prev) => ({ ...prev, project: e.target.value }))}
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Rating *</label>
              <StarRating
                rating={newReview.rating}
                size="w-8 h-8"
                interactive={true}
                onStarClick={handleStarClick}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Review *</label>
              <textarea
                required
                rows={4}
                placeholder="Share your experience..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                value={newReview.review}
                onChange={(e) => setNewReview((prev) => ({ ...prev, review: e.target.value }))}
              ></textarea>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg">
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Reviews */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review._id} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-slate-800">{review.name}</h4>
                      {review.verified && <Verified className="w-4 h-4 text-blue-500" />}
                    </div>
                    <p className="text-slate-600">{review.role}</p>
                    <p className="text-sm text-slate-500">{review.company}</p>
                    {review.project && (
                      <p className="text-sm text-blue-600 font-medium">Project: {review.project}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                  <div className="flex items-center space-x-2 text-sm text-slate-500 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 mb-6">{review.review}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => handleHelpfulClick(review._id, review.helpful)}
                  className="flex items-center space-x-2 text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <div className="text-sm text-slate-400">
                  {review.verified ? 'Verified Client' : 'Unverified'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg">No reviews found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
