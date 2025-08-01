const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted' });
};

exports.updatePost = async (req, res) => {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};
