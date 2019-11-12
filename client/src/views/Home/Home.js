import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

<<<<<<< Updated upstream
function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}
=======
export const Home = () => (
    <React.Fragment>
        <Navigation />
        <Video />
        <ReviewSlider data={sliderData}/>
        <MissionStatement />
        <About />
        <Media />
    </React.Fragment>
)
>>>>>>> Stashed changes

export default Home;
