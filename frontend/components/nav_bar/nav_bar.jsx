import React from 'react';

const NavBar = ({ currentUser, logout, openModal, demoLogin }) => {
    
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}><i className="fas fa-user"></i> Sign in</button>
            <button onClick={() => demoLogin()}>Demo Login</button>
        </nav>
    );

    const player = () => (
        <div className="if-logged-in">
            <h2>player</h2>
            <button onClick={() => logout()}>Log Out</button>
        </div>
    )

    return (
        currentUser ? 
        player() :
        sessionLinks()
    );
};

export default NavBar;