import React from "react";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar";
import ResumeLayout from "../components/ResumeLayout";
import { ToastContainer } from 'react-toastify';
import Contact from "../components/Contact";
import { Helmet } from 'react-helmet';
import colors from "../resources/colors.json";


const Resume = () => {
  return (
    <div style={{backgroundColor: colors.background}}>
    <Helmet>
      <title>Resume</title>
    </Helmet>
      <ToastContainer closeButton={false} />
      <NavigationBar />
      <Container fluid="sm" className="mb-4">
        <ResumeLayout />

      </Container>
      <Contact />
    </div>
  );
};

export default Resume;
