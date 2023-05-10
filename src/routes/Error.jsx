import React from "react";
import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';
import GridRow from "../components/GridRow";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BoldText from "../components/BoldText";

const Error = (props) => {
  return (
    <div className={"full-height " + props.theme}>
      <ToastContainer closeButton={false} />
      <NavigationBar theme={props.theme} updateTheme={props.updateTheme} />
      <Container fluid="sm">
        <GridRow >
          <img className="error-image shadow-image mt-5" alt="" src={require('../resources/images/404.png')} />
          <h2 className={"my-3 " + props.theme}>
            <BoldText text="It appears you got a little lost."
            boldText={["lost."]}
            theme={props.theme} />
            Let's get back on the path now
          </h2>
        </GridRow>
      </Container>
    </div>
  );
};

export default Error;
