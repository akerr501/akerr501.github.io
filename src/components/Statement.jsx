import BoldText from "./BoldText";
import ResumeSection from './Resume/ResumeSection';
import { motion } from "framer-motion";


function Statement(props) {
  return (
    <div className="m-5">
      <ResumeSection theme={props.theme}>
        <div className="section-parent">
          <div className="section-child">
            <motion.div
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 1.1}}
            >
              <img className="about-image no-select" alt="" src={require('../resources/images/AK.png')} />
            </motion.div>
          </div>
          <div className="section-child section-text" style={{fontSize: "1.5em"}}>
            <BoldText
              text="I am a young and ambitious programmer with unique solutions to complex problems"
              boldText={["ambitious", "solutions"]}
              theme={props.theme}
            />
          </div>
        </div>
      </ResumeSection>
    </div>
  );
}


export default Statement;
