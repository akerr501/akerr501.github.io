import ResumeDetails from "./Resume/ResumeDetails";
import ResumeSection from "./Resume/ResumeSection";
import Skills from "./Resume/Skills";
import SkillsDetails from "./Resume/SkillsDetails";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import resumeData from '../resources/resume.json';
import "./Resume/resume.css";
import GridRow from "./GridRow";
import colors from "../resources/colors.json";
import resumePDF from '../resources/resume.pdf';
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FiDownload } from "react-icons/fi";


function ResumeLayout() {

  return (
    <Row>
      <h3 className="mb-1 mt-4 text-center">
        Resume
        <a className="resume-download-link" href={resumePDF} download="Adam_Kerr_Resume.pdf">
        <motion.div
          transition={{ type: "spring", bounce: 0.5}}
          whileHover={{ color: colors.mainDarker, scale: 1.2}}
          whileTap={{ color: colors.main, scale: 0.9}}
          className="resume-download"
        >

          <IconContext.Provider value={{ color: colors.main, size: "1.30em", className: "ms-2 pb-1" }}>

              <FiDownload />
          </IconContext.Provider>

        </motion.div>
        </a>
      </h3>
      <Col xl={9}>
        <ResumeSection sectionTitle="Education">
          {resumeData.education.map((item) => (
            <ResumeDetails
              key={item.school}
              titleOne={item.school}
              titleTwo={item.degree}
              subtitle={item.graduation + ", " + item.miscDegreeDescrip + ", " + item.gpa + " GPA"}
              accomplishments={item.accomplishments}
              accomplishmentBolds={item.accomplishmentBolds}
            />
          ))}
        </ResumeSection>
        <ResumeSection sectionTitle="Experience">
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
            />
          ))}
        </ResumeSection>
        <ResumeSection sectionTitle="Volunteering">
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
            />
          ))}
        </ResumeSection>
      </Col>
      <Col xl={3}>
        <ResumeSection sectionTitle="Languages">
          <Skills skills={resumeData.languages}/>
        </ResumeSection>
        <ResumeSection sectionTitle="Skills">
          <GridRow><SkillsDetails skills={resumeData.skills}/></GridRow>

        </ResumeSection>
      </Col>
    </Row>
  );
}

export default ResumeLayout;
