import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Aos from 'aos'

Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(response => response.json())
    .then(data => {
      if (data.created === 1) {
        alert("Form submitted successfully!");
        // Or use a more user-friendly notification method
        window.location.href = 'index.html'; // Redirect in the same tab
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    });
});
