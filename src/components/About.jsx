import BoldText from "./BoldText";
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
import ResumeSection from './Resume/ResumeSection';

function About() {
  return (
    <div className="m-5">
      <ResumeSection>
        <Col className="my-2">
          <div className="section-parent ">
            <div className="section-child section-text">
              <Col>
                <BoldText
                  className="mb-3"
                  text="Hello there, my name is Adam Kerr, I'm 21 years old and I recently graduated from Oregon State University in 2022. I'm experienced in mobile and web development, along with microcontrollers and databases."
                  boldText={["oregon state", "2022.", "mobile", "web", "microcontrollers", "databases", "21"]}
                />
                <BoldText
                  text="I'm passionate about working on complicated problems that require creative solutions. Ultimately, I want to work on projects that focus on sustainability or helping others!"
                  boldText={["creative", "sustainability"]}
                />
              </Col>
            </div>
            <div className="section-child">
              <motion.div
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 1.1}}
              >
                <img className="about-image shadow-image" alt="" src={require('../resources/about1.jpg')} />
              </motion.div>
            </div>

          </div>
          <div className="section-parent">
            <div className="section-child">
              <motion.div
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 1.1}}
              >
                <img className="about-image shadow-image" alt="" src={require('../resources/about2.jpg')} />
              </motion.div>
            </div>
            <div className="section-child section-text">
              <BoldText
                text="When I'm not programming, I like get outdoors! I like to play frisbee, go hiking, rock climb, and volunteer. At home, I relax by reading murder mystery novels and sipping on tea. My favorite activity with friends is getting together and playing board games"
                boldText={["outdoors!", "rock climb,", "novels"]}
              />
            </div>
          </div>
        </Col>
      </ResumeSection>
    </div>
  );
}


export default About;
