import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error("Failed to fetch posts", err));
  }, []);

  return (
    <div>
      <h2>📚 All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        posts.map(post => (
          <div key={post._id} className="card my-3">
            <div className="card-body">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <small className="text-muted">Author: {post.author}</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
