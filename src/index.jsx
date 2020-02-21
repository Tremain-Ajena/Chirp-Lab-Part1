import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import App2 from './Components/App2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App2 />,
    // <Navigation />, You can NOT have more than one of these reference tags in
    // you index render function. You have to link the component files together
    // and reference the older sibling component file to the index.
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
