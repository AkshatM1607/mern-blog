const express = require('express');
const { createPost, getPosts, deletePost, updatePost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getPosts);
router.post('/', authMiddleware, createPost);
router.delete('/:id', authMiddleware, deletePost);
router.put('/:id', authMiddleware, updatePost);

module.exports = router;
