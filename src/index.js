import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

// This enables hot reloading
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)