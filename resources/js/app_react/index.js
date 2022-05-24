import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "../app_react/components/App"
import {HashRouter as Router} from "react-router-dom";
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
        , document.getElementById('application'))
