import React, { useState } from 'react';
import { addPost } from '../services/api';

function BlogPostForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost({ title, body });
            setMessage('Post created successfully!');
            setTitle('');
            setBody('');
        } catch (error) {
            setMessage('Failed to create post. Try again.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
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
                <button type="submit">Create Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BlogPostForm;
