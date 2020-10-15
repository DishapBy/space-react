import React from 'react';
import logo from './logo.svg';
import './style.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Calendar from "./components/Calendar/Calendar";
import FetchData from "./service/FetchData";

class App extends React.Component {

    fetchData = new FetchData();

    state = {
        rocket: 'Falcon 9',
        rocketFeatures: null,
        rockets: []
    };

    componentDidMount() {
        this.updateRocket();
    };

    updateRocket = () => {
      this.fetchData.getRocket()
          .then(data => {
              this.setState({rockets: data.map(item => item.name)})
              return data
          })
          .then(data => data.find(item => item.name === this.state.rocket))
          .then((result) => this.setState({rocketFeatures: result}))
    };

    changeRocket = (newRocket) => {
        this.setState({
            rocket: newRocket
        }, this.updateRocket)
}

    render() {
        return (
            <React.Fragment>
                <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
                <Main rocket={this.state.rocket}/>
                <Features />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
