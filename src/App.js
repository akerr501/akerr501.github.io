import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Portfolio from "./routes/Portfolio";
import Error from "./routes/Error";

class App extends Component {

  state = { theme:
    localStorage.getItem("theme") !== undefined && localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme") :
        (window.matchMedia&& window.matchMedia('(prefers-color-scheme: dark)').matches)
          ? "dark" : "light"
  };

  updateTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    this.setState({ theme: newTheme });
  };

  componentDidMount() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if(localStorage.getItem("theme") === undefined || localStorage.getItem("theme") === null) {
        this.updateTheme(event.matches ? "dark" : "light");
      }
    });
  }


  render() {
    console.log(this.state.theme);

    return (
      <div className="full-height">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home theme={this.state.theme} updateTheme={this.updateTheme} />} />
          <Route path="portfolio" element={<Portfolio theme={this.state.theme} updateTheme={this.updateTheme}/>} />
          <Route path="portfolio/:id" element={<Portfolio theme={this.state.theme} updateTheme={this.updateTheme}/>} />
          <Route path="resume" element={<Resume theme={this.state.theme} updateTheme={this.updateTheme} />} />
          <Route path="*" element={<Error theme={this.state.theme} updateTheme={this.updateTheme} />} />
        </Routes>
      </BrowserRouter></div>
    );
  }
}

export default App;
