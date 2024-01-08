import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="home-container">
        <div className="banner">
        </div>

        <div className="home-content">
            <h1 className="display-4">AIEarthHack 2024</h1>
            <Link to="/search">
                <Button variant="primary">Search for circular economy problems and solutions</Button>
            </Link>

            <br></br>
            
            <a href="https://github.com/kiransprasad/AIEarthhack2024">
                <img
                    src="github-logo.png" 
                    alt="GitHub Logo"
                    style={{ width: '50px', height: '50px', marginTop: '20px' }}
                />
            </a>
        </div>
    </div>
    );
}

export default Home;