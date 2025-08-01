import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [post, setPost] = useState({ title: '', content: '' });
  const [myPosts, setMyPosts] = useState([]);

  const token = localStorage.getItem("token");

  const fetchPosts = () => {
    axios.get("https://mern-blog-backend-m0x4.onrender.com/api/posts")
      .then(res => {
        const user = parseJwt(token)?.username;
        const mine = res.data.filter(p => p.author === user);
        setMyPosts(mine);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mern-blog-backend-m0x4.onrender.com/api/posts", post, {
        headers: { Authorization: token }
      });
      toast.success("Post created!");
      setPost({ title: '', content: '' });
      fetchPosts();
    } catch {
      toast.error("Failed to create post");
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://mern-blog-backend-m0x4.onrender.com/api/posts/${id}`, {
        headers: { Authorization: token }
      });
      toast.success("Post deleted!");
      fetchPosts();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div>
      <h2>✍️ Write New Blog</h2>
      <form onSubmit={createPost}>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Title"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="form-control my-2"
          placeholder="Content"
          rows="4"
          value={post.content}
          onChange={e => setPost({ ...post, content: e.target.value })}
        ></textarea>
        <button className="btn btn-primary w-100">Post</button>
      </form>

      <h3 className="mt-5">🧾 Your Posts</h3>
      {myPosts.map(p => (
        <div key={p._id} className="card my-2">
          <div className="card-body">
            <h4>{p.title}</h4>
            <p>{p.content}</p>
            <button className="btn btn-danger" onClick={() => deletePost(p._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
