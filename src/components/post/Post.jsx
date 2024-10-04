import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './post.css';
import { getInterviewPosts } from '../../api/get_post';

export default function PostList() {
  const famousITCompanies = [
    "Accenture", "AnglerFox", "Byju's", "Capgemini", "Mahindra EPC",
    "Nwegan", "L&T Infotech", "Persistent", "Amazon", "DeltaX",
    "Reliance", "Suzlon", "Surya", "HCL", "Cognizant", "MicroWeb",
    "IBM", "Infosys", "Lupin", "Microsoft", "Mindtree", "TATA Projects",
    "Wipro", "Global Logic", "PhonePe", "SAP", "TCS", "Tech Mahindra",
    "CMC Limited", "Patni", "ZYCUS"
  ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getInterviewPosts();
        const uniquePosts = Array.from(new Set(data.map(post => post.id)))
          .map(id => data.find(post => post.id === id));

        setPosts(uniquePosts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search term and selected company
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = selectedCompany ? post.company === selectedCompany : true;
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="postlist">
      <div className="topbar">
      <div className="top">
        <div className="search">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="companyfilter">
        <select
          className="companyselect"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">-- Select Company --</option>
          {famousITCompanies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
        <button
          className="reset-button"
          onClick={() => setSelectedCompany('')}
        >
          Remove Filter
        </button>
      </div>
      </div>
      {loading ? (
        <p> Loading posts...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map(post => <Post key={post.id} post={post} />)
      ) : (
        <h1>No posts found for the selected criteria.</h1>
      )}
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="post card mb-4">
      <div className="card-body">
        <Link to={`/post/${post.id}`} className="link">
          <div className="postInfo">
            <h5 className="postTitle card-title">{post.title}</h5>
            <hr />
            <p className="postDate card-subtitle text-muted">
              {new Date(post.created_at).toDateString()}
            </p>
          </div>
          <p className="postDesc card-text">{post.experience}</p>
        </Link>
      </div>
    </div>
  );
}
