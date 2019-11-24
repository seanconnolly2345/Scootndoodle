import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Media from './Media';
import data from './data/data';

//The app is now passing the data as a property
ReactDOM.render(<App data={data} />, document.getElementById('root'));
