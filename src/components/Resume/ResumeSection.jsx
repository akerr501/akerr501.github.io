import "./resume.css";
import { motion } from "framer-motion";

function ResumeSection(props) {
  return (
    <motion.div
      className="resume-section my-4 p-2 px-3"
      whileHover={{ scale: 1.02}}
    >
      {props.sectionTitle !== undefined &&
        <h4 className="resume-section-title text-center">{props.sectionTitle}</h4>
      }
      {props.children}
    </motion.div>
  );
}

export default ResumeSection;
