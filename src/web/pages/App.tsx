import React from "react";
import routes from "../routes/index";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import './app.css';

const App = () => {
    return (
        <RecoilRoot>
            <Router basename="/">{routes()}<Link to="/home">home</Link></Router>
        </RecoilRoot>
    );
};
export default App;
