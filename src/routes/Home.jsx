import React from "react";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar"
import Statement from "../components/Statement"
import KeyProjects from "../components/KeyProjects"
import About from "../components/About"
import Contact from "../components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import colors from "../resources/data/colors.json";

const Home = (props) => {

  return (
    <div className={props.theme}>
      <ToastContainer closeButton={false} />
      <NavigationBar theme={props.theme} updateTheme={props.updateTheme} />
      <Container fluid="sm">
        <Statement theme={props.theme} />
        <KeyProjects theme={props.theme}/>
        <About theme={props.theme} />

      </Container>
      <Contact theme={props.theme}/>
    </div>
  );
};

export default Home;
