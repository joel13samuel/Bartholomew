import React, { useState } from 'react';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError('Please fill out all fields.');
            return;
        }
        setError('');
        console.log('Sign up:', { username, email, password });
        // Add real registration logic here
    };

    return (
        <div style={{ maxWidth: 400, margin: '3rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: 8, background: '#fff' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: 4 }}>Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                        autoComplete="username"
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                        autoComplete="email"
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                        autoComplete="new-password"
                    />
                </div>
                {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                <button type="submit" style={{ width: '100%', padding: 10, background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpPage;
