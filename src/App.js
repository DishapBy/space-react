import React from 'react';
import logo from './logo.svg';
import './style.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <React.Fragment>
            <Main />
            <Footer />
        </React.Fragment>
    )
}

export default App;
