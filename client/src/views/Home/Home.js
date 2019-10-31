import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <section id="home">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>
            </section>
            <section id='about-us'>
                <p>about us</p>
            </section>
        </div>
    );
}

export default Home;
