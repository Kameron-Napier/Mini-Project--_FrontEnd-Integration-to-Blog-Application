import React, { useState } from 'react';
import { signup } from '../services/api';

function Signup() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup({ userId, password, name });
            setMessage('Signup successful! Please sign in.');
            setUserId('');
            setPassword('');
            setName('');
        } catch (error) {
            setMessage('Signup failed. Try again.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
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
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;
