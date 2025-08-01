// backend/routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const newPost = await Post.create({ title, content, author: req.user });
  res.json(newPost);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.put('/:id', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author !== req.user) return res.status(403).json({ error: "Forbidden" });

  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.json(post);
});

router.delete('/:id', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author !== req.user) return res.status(403).json({ error: "Forbidden" });

  await post.deleteOne();
  res.json({ message: "Post deleted" });
});

module.exports = router;
