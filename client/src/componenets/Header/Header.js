import React from 'react';

import "./Header.css"

function Header() {

    return (
        <header id="header">
            <h1 id="logo"><a href="/">CL</a></h1>
            <nav id="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;