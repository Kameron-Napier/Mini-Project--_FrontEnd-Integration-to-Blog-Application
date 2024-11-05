import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

export const addPost = async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
};

export const updatePost = async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
};
