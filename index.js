import './index.css';
import jsLogo from './assets/js-logo.png';

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';
document.body.appendChild(title);

const img = document.createElement('img');
img.src = jsLogo;
document.body.appendChild(img);

console.log('Hello World!');
