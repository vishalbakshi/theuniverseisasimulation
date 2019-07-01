import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id="header">
            <h1>the</h1>
            <h1>universe is a</h1>
            <h1>simulation</h1>
            <div id="social-links">
                <a href="https://www.instagram.com/vbaknation/">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCqvA0CVB3QR3TLpGVzkD35g">
                    <i className="fab fa-youtube"></i>
                </a>
                
            </div>
        </div>
    )
}

export default Header;