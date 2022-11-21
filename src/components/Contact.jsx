import GridRow from "./GridRow";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import IconBuilder from './Icon/IconBuilder';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import colors from "../resources/colors.json";

function Contact() {
  return (
    <Container fluid className="pt-4">
      <GridRow color={colors.blueBackground}>
        <h3 className="mt-4">Contact</h3>
        <Container style={{width: "66%"}} className="mb-5 justify-content-center" fluid="sm">
          <Row>
            <IconBuilder
              name="  Email   "
              link="kerrada@oregonstate.edu"
              hoverColor="#B6E6BD"
              tapColor="#6acb78"
              copyBoth={true}
            >
              <FaRegEnvelope />
            </IconBuilder>
            <IconBuilder
              name="  GitHub  "
              link="https://github.com/akerr501"
              hoverColor="#eed2c1"
              tapColor="#e4b79c"
              copyBoth={false}
            >
              <FaGithub />
            </IconBuilder>
            <IconBuilder
              name=" LinkedIn "
              link="https://www.linkedin.com/in/adam-c-kerr"
              hoverColor="#b2d4e7"
              tapColor="#66aad0"
              copyBoth={false}
            >
              <FaLinkedinIn />
            </IconBuilder>
            <IconBuilder
              name="Instagram "
              link="https://www.instagram.com/aaaaadamkerr"
              hoverColor="#f6c0d2"
              tapColor="#ed82a6"
              copyBoth={false}
            >
              <FaInstagram />
            </IconBuilder>
          </Row>
        </Container>
      </GridRow>
    </Container>
  );
}


export default Contact;
