import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'


// react 18 api 
const container = document.getElementById('root'); 
const root = createRoot(container!); 
root.render(<App />);
