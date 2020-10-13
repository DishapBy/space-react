import React from 'react';
import logo from './logo.svg';
import './style.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    )
}

export default App;
