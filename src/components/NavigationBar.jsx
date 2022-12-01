import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion } from "framer-motion";
import colors from "../resources/colors.json";

function NavigationBar() {
  return (
      <Navbar expand="sm" style={{backgroundColor: colors.background}} className="gap-4 px-5">
      <Navbar.Brand href="/">
        <motion.div whileTap={{color: colors.mainDarker}} whileHover={{color: colors.mainDarker}}>
          Adam Kerr
        </motion.div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/resume" className="px-3">
            <motion.div whileHover={{color: colors.mainDarker}}>
              Resume
            </motion.div>
          </Nav.Link>
          <NavDropdown title="Key Projects" id="basic-nav-dropdown" className="ms-2 px-2">
            <NavDropdown.Item href="https://www.bonobooks.app/">BonoBooks</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/akerr501/akerr501.github.io">Personal Website</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/OPEnSLab-OSU/Loom">Loom</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
