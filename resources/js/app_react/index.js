import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "../app_react/components/App"
import {HashRouter as Router} from "react-router-dom";
import {PageProvider} from "./components/Store/ContextPageClb";
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <PageProvider>
                    <App />
                </PageProvider>
            </Router>
        </React.StrictMode>
        , document.getElementById('application'))
