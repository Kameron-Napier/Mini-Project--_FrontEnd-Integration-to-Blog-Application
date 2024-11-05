import express from 'express';
import { addPost, getPosts, updatePost, deletePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', addPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
