import React, { useState } from 'react';

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder: log credentials
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }
        setError('');
        console.log('Sign in:', { username, password });
        // Add real authentication logic here
    };

    return (
        <div style={{ maxWidth: 400, margin: '3rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: 8, background: '#fff' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Sign In</h2>
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
                    <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                        autoComplete="current-password"
                    />
                </div>
                {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                <button type="submit" style={{ width: '100%', padding: 10, background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInPage;
