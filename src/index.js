import React from 'react';
import CreateRoot from 'react-dom';
import 'tailwindcss/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

CreateRoot.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
