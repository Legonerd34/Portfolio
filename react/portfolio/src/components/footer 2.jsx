import React from 'react';
import '../index.css';

function Footer() {
    return (
        <div className="footer">
            <hr style={{ color: 'darkgrey' }} />
            <div className="footer-elements">
                <p className="footer-element">2024 Max Bushell</p>

                <a href="https://github.com/Legonerd34" target="_blank" rel="noopener noreferrer" className="footer-element">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                        alt="GitHub" 
                        style={{ width: '20px', height: '20px' }} 
                    />
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer-element">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                        alt="LinkedIn" 
                        style={{ width: '20px', height: '20px' }} 
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;
