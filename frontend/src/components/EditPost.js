import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost, fetchPosts } from '../services/api';

function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadPost = async () => {
            try {
                const posts = await fetchPosts();
                const post = posts.find((p) => p._id === id);
                if (post) {
                    setTitle(post.title);
                    setBody(post.body);
                }
            } catch (error) {
                console.error('Error loading post:', error);
            }
        };
        loadPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost(id, { title, body });
            setMessage('Post updated successfully!');
        } catch (error) {
            setMessage('Failed to update post. Try again.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default EditPost;
