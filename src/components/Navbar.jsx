import React, { useState } from 'react';

const Navbar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleAuthClick = () => {
        setIsSignedIn((prev) => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="navbar-title">interviewprep</span>
            </div>
            <div className="navbar-right">
                {isSignedIn ? (
                    <button onClick={handleAuthClick} className="navbar-btn">Log Out</button>
                ) : (
                    <button onClick={handleAuthClick} className="navbar-btn">Sign In</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
