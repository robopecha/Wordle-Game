// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import './reset.css';
import './styles.css';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
