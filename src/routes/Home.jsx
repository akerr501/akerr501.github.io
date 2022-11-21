import React from "react";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar"
import Statement from "../components/Statement"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Contact from "../components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import colors from "../resources/colors.json";

const Home = () => {
  return (
    <div style={{backgroundColor: colors.background}}>
      <ToastContainer closeButton={false} />
      <NavigationBar />
      <Container fluid="sm">
        <Statement />
        <Portfolio />
        <About />

      </Container>
      <Contact />
    </div>
  );
};

export default Home;
