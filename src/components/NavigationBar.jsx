import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion, AnimatePresence } from "framer-motion";
import colors from "../resources/data/colors.json";
import { useState } from "react";

import { HiOutlineSun } from "react-icons/hi";
import { RiMoonClearLine } from "react-icons/ri";

function NavigationBar(props) {

  const [expanded, setExpanded] = useState(false)

  const setToggle = async () => {
    if(expanded) await new Promise(resolve => setTimeout(resolve, 100));
    setExpanded(!expanded)
  }

  let icon;
  if(props.theme === "light"){
    icon = <HiOutlineSun className="mb-1 mx-1"/>;
  } else {
    icon = <RiMoonClearLine className="mb-1"/>;
  }

  return (
      <Navbar onToggle={setToggle} expand="sm" className={props.theme + " gap-4 px-5"}>
      <Navbar.Brand href="/">
        <div className={"hover-color " + props.theme}>
          Adam Kerr
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/resume" className="px-3">
            <div className={(props.theme === "dark" ? "dark " : "") + "hover-color"}>
              Resume
            </div>
          </Nav.Link>
          <Nav.Link href="/portfolio" className="px-3">
            <div className={(props.theme === "dark" ? "dark " : "") + "hover-color"}>
              Portfolio
            </div>
          </Nav.Link>
          {/* <NavDropdown title="Key Projects" className={props.theme + " hover-color ms-2 px-2"}>
            <NavDropdown.Item href="https://www.bonobooks.app/">BonoBooks</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/akerr501/akerr501.github.io">Personal Website</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/OPEnSLab-OSU/Loom">Loom</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav style={{ width: "100%" }}>
            <div
              className={"toggle-container " + (props.theme === "light" ? "light" : "dark") + (expanded ? " mt-3 ms-3" : "")}
              onClick={() => props.updateTheme(props.theme === "light" ? "dark" : "light")}
              style={{ 'marginLeft': (expanded ? "inherit" : "auto"), 'justifyContent': props.theme === "dark" ? 'flex-end' : 'flex-start' }}
            >
              <motion.div layout className="toggle-icon-container">
                <AnimatePresence exitBeforeEnter initial={false}>
                  <motion.i
                    key={props.theme === "dark" ? 'moon' : 'sun'}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: .2 }}
                  >
                    {icon}
                  </motion.i>
                </AnimatePresence>
              </motion.div>
            </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
