import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
// import Business from "./routes/Business";
import Error from "./routes/Error";

class App extends Component {
  state = {
    data: null
  };


  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="full-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="business" element={<Business />} /> */}
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter></div>
    );
  }
}

export default App;
