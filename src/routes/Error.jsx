import React from "react";
import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';
import GridRow from "../components/GridRow";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BoldText from "../components/BoldText";
import colors from "../resources/colors.json";

const Error = () => {
  return (
    <div className="full-height" style={{backgroundColor: colors.background}}>
      <ToastContainer closeButton={false} />
      <NavigationBar />
      <Container fluid="sm">
        <GridRow>
          <img className="error-image shadow-image mt-5" alt="" src={require('../resources/404.png')} />
          <h2 className="my-3">
            <BoldText text="It appears you got a little lost."
            boldText={["lost."]} />
            Let's get back on the path now
          </h2>
        </GridRow>
      </Container>
    </div>
  );
};

export default Error;
