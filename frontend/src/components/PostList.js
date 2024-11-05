import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
