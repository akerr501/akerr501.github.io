import ResumeDetails from "./Resume/ResumeDetails";
import ResumeSection from "./Resume/ResumeSection";
import Skills from "./Resume/Skills";
import SkillsDetails from "./Resume/SkillsDetails";
import LeetCode from "./Resume/LeetCode";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import resumeData from '../resources/data/resume.json';
import "./Resume/resume.css";
import GridRow from "./GridRow";
import colors from "../resources/data/colors.json";
import resumePDF from '../resources/data/resume.pdf';
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FiDownload } from "react-icons/fi";
import { FaLink } from "react-icons/fa";


function ResumeLayout(props) {

  return (
    <Row>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0}}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-1 mt-4 text-center">
          Resume
          <a className="resume-download-link" href={resumePDF} download="Adam_Kerr_Resume.pdf">
          <motion.div
            transition={{ type: "spring", bounce: 0.5}}
            whileHover={{ color: colors.mainDarker, scale: 1.2}}
            whileTap={{ color: colors.main, scale: 0.9}}
            className="resume-link"
          >

            <IconContext.Provider value={{ color: colors.main, size: "1.30em", className: "ms-2 pb-1" }}>

                <FiDownload />
            </IconContext.Provider>

          </motion.div>
          </a>
        </h3>
      </motion.div>
  
      <Col lg="8" xl="8">
        <ResumeSection sectionTitle="Education" theme={props.theme}>
          {resumeData.education.map((item) => (
            <ResumeDetails
              key={item.school}
              titleOne={item.school}
              titleTwo={item.degree}
              subtitle={item.graduation + ", " + item.miscDegreeDescrip + ", " + item.gpa + " GPA"}
              accomplishments={item.accomplishments}
              accomplishmentBolds={item.accomplishmentBolds}
              theme={props.theme}
            />
          ))}
        </ResumeSection>
        <ResumeSection sectionTitle="Experience" theme={props.theme}>
          {resumeData.workExperience.map((item) => (
            <ResumeDetails
              key={item.employer}
              titleOne={item.employer + ", " + item.location}
              titleTwo={item.position}
              subtitle={item.start + " - " + item.end}
              description={item.description}
              descriptionBolds={item.descriptionBolds}
              accomplishments={item.accomplishments}
              accomplishmentBolds={item.accomplishmentBolds}
              theme={props.theme}
            />
          ))}
        </ResumeSection>
        <ResumeSection sectionTitle="Volunteering" theme={props.theme}>
          {resumeData.volunteerExperience.map((item) => (
            <ResumeDetails
              key={item.organization}
              titleOne={item.organization + ", " + item.location}
              titleTwo={item.project}
              subtitle={item.hours + " hours"}
              description={item.description}
              descriptionBolds={item.descriptionBolds}
              accomplishments={item.accomplishments}
              accomplishmentBolds={item.accomplishmentBolds}
              theme={props.theme}
            />
          ))}
        </ResumeSection>
      </Col>
      <Col lg="4" xl="4">
        <ResumeSection
          theme={props.theme}
          sectionTitle="LeetCode"
          sectionIcon={
            <motion.div
              transition={{ type: "spring", bounce: 0.5}}
              whileHover={{ scale: 1.2}}
              whileTap={{ scale: 0.95}}
              onClick={(e) => {
                if(e && e.stopPropagation) e.stopPropagation();
                window.open('https://leetcode.com/Serosidium/');
              }}
              style={{color: colors.main}}
              className="leetcode-link"
            >
              <IconContext.Provider value={{ size: "1.4em", className: "mt-1 ms-2 pb-1" }}>
                  <FaLink />
              </IconContext.Provider>
            </motion.div>

          }
          >
          <LeetCode theme={props.theme}/>
        </ResumeSection>
        <ResumeSection sectionTitle="Languages" theme={props.theme}>
          <Skills skills={resumeData.languages}/>
        </ResumeSection>
        <ResumeSection sectionTitle="Skills" theme={props.theme}>
          <GridRow><SkillsDetails skills={resumeData.skills}/></GridRow>

        </ResumeSection>
      </Col>
    </Row>
  );
}

export default ResumeLayout;
