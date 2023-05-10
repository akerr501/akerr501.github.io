import React from "react";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar";
import ResumeLayout from "../components/ResumeLayout";
import { ToastContainer } from 'react-toastify';
import Contact from "../components/Contact";
import { Helmet } from 'react-helmet';
import colors from "../resources/data/colors.json";


const Resume = (props) => {
  return (
    <div className={props.theme}>
    <Helmet>
      <title>Resume</title>
    </Helmet>
      <ToastContainer closeButton={false} />
      <NavigationBar theme={props.theme} updateTheme={props.updateTheme} />
      <Container fluid="sm" className="mb-4">
        <ResumeLayout theme={props.theme}/>

      </Container>
      <Contact theme={props.theme}/>
    </div>
  );
};

export default Resume;
