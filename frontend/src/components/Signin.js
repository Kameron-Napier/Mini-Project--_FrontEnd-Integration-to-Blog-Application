import React, { useState } from 'react';
import { signin } from '../services/api';

function Signin() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signin({ userId, password });
            setMessage('Signin successful!');
        } catch (error) {
            setMessage('Signin failed. Check credentials.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signin;
