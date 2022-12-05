import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <i class="fas fa-solid fa-cash-register color-blue mr-2"></i>
                Fantastic Buy
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Sign in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/jobs" className="nav-link">Jobs</Link>
                    </li>
                   
                   
                </ul>
            </div>
        </nav>
    );

};