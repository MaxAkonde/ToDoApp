import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="p-3 mb-2 bg-dark text-white text-center">
            <h1>Todo</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>   
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>   
            </ul>
        </header>
    )

}

export default Header;