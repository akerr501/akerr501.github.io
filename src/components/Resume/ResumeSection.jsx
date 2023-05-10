import "./resume.css";
import { motion } from "framer-motion";

function ResumeSection(props) {
  return (
    <motion.div
      className={"resume-section-" + props.theme + " my-4 p-2 px-3"}
      whileHover={{ scale: 1.02}}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0}}
      transition={{ duration: 0.3 }}
    >
      {props.sectionTitle !== undefined &&
        <div className="resume-section-title text-center no-select">
          <h4>{props.sectionTitle}</h4>
          {props.sectionIcon !== undefined &&
            props.sectionIcon
          }
        </div>
      }
      {props.children}
    </motion.div>
  );
}

export default ResumeSection;
