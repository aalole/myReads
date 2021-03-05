import React from 'react';

const Footer = ({myname, githubUrl, year}) => {
    return (
        <div className="footer">
            <small>&copy; {year} All right reserved</small>
            <p> 
            <span>By: {myname}</span>
            <a href={githubUrl}> <i className="fab fa-github"></i> </a>
            </p>
        </div>

    )
}

export default Footer;