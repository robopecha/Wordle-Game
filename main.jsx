import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App.jsx';

import './src/reset.css';
import './src/styles.css';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
