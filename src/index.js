import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCartShopping, faXmark, faBoltLightning, faBookOpen, faTags, faStar, faStarHalfStroke, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCartShopping, faXmark, faBoltLightning, faBookOpen, faTags, faStar, faStarHalfStroke, faArrowLeft)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

