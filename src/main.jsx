import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// reactBootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
    </AuthProvider>
)
