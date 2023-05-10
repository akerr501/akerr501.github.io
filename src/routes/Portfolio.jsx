import React from "react";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar";
import Contact from "../components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CardList} from "../components/CardHeroList/CardList";
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from "react-router-dom";
import FadeHeader from "../components/FadeHeader";


const Portfolio = (props) => {
  const navigate = useNavigate();
  return (
      <div className={props.theme}>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <ToastContainer closeButton={false} />
        <NavigationBar theme={props.theme} updateTheme={props.updateTheme} />
        <Container fluid="sm">
          <FadeHeader title="Code Portfolio" />
          <CardList theme={props.theme} useParams={useParams} navigate={navigate}/>

        </Container>
        <Contact theme={props.theme}/>
      </div>
  );
};

export default Portfolio;
