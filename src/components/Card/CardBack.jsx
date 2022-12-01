import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import BoldText from "../BoldText";
import { FaCodeBranch, FaLink, FaGithub, FaAppStoreIos, FaGooglePlay, FaUniversity, FaVideo } from "react-icons/fa";

import {ReactComponent as BonoBooksLeaves} from './../../resources/bbleaves.svg';
const icons = [<FaGithub />, <BonoBooksLeaves className="bb-icon" width={15} height={15} fill="black" />, <FaAppStoreIos />, <FaGooglePlay />, <FaUniversity />, <FaVideo />];


const handleListClick = (link, e) => {
  if(e && e.stopPropagation) e.stopPropagation();
  window.open(link);
};

function CardBack(props) {
  return (
    <div className="back">
      <div className="title-text mt-2"><h6 className="me-2">Contributions</h6><FaCodeBranch /></div>
      <ul className="contribution-list me-1 descriptionText">
        {props.contributions.map(( contrib ) =>
          <li key={contrib} className="c-list-item">
            <BoldText
              text={contrib}
              boldText={props.contributionBolds} />
          </li>
        )}
      </ul>

      <div className="title-text"><h6 className="me-2">Links</h6><FaLink /></div>
      <ul className="icon-list">
        {props.links.map(( link, index ) =>
          <li key={link} className="l-list-item">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1.03 }}
              onClick={(e) => handleListClick(link, e)}
              transition={{ type: "spring", bounce: 0.25}}
            >
              {icons[props.linkIcons[index]]}
              <span className="ps-1">{props.linkText[index]}</span>
            </motion.div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default CardBack;
