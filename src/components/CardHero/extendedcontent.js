import * as React from "react";
import BoldText from "../BoldText";
import { HiOutlineCode } from "react-icons/hi";
import { FaCodeBranch, FaLink, FaGithub, FaAppStoreIos, FaGooglePlay, FaUniversity, FaVideo } from "react-icons/fa";
import {ReactComponent as BonoBooksLeaves} from './../../resources/images/bbleaves.svg';
import { motion, useDeprecatedInvertedScale } from "framer-motion";

const handleListClick = (link, e) => {
  if(e && e.stopPropagation) e.stopPropagation();
  window.open(link);
};

export const ExtendedContent = (props) => {

  const inverted = useDeprecatedInvertedScale();
  var icons = [<FaGithub />, <BonoBooksLeaves className="bb-icon" width={15} height={15} fill={(props.theme === "dark" ? "#FAF8F1" : "black")} />, <FaAppStoreIos />, <FaGooglePlay />, <FaUniversity />, <FaVideo />];
  return (
    <motion.div
      className={"descriptionText content-container-" + props.theme}
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
    <div className="title-text"><h4 className="me-2">About</h4><HiOutlineCode style={{fontSize: "24px"}} className="mt-1"/></div>
      <div className="mb-3 ms-2 descriptionText">
        <BoldText
          text={props.description}
          boldText={props.descriptionBolds}
          theme={props.theme}
        />
      </div>
      <div className="title-text"><h4 className="me-2">Contributions</h4><FaCodeBranch className="mt-1"/></div>
      <ul className="contribution-list me-1 ">
        {props.contributions.map(( contrib ) =>
          <li key={contrib} className="c-list-item">
            <BoldText
              text={contrib}
              boldText={props.contributionBolds}
              theme={props.theme} />
          </li>
        )}
      </ul>

      <div className="title-text mt-2"><h4 className="me-2">Links</h4><FaLink style={{fontSize: "19px"}} className="mt-1"/></div>
        {props.links.map(( link, index ) =>
          <motion.div
            key={link}
            style={{"width" : "135px"}}
            className={"ms-2 hover-color-" + props.theme}
            whileHover={{ scale: 1.075 }}
            whileTap={{ scale: 1.075 }}
            transition={{ type: "spring", bounce: 0.25}}
            onClick={(e) => handleListClick(link, e)}
          >
            {icons[props.linkIcons[index]]}
            <div className="inline ps-2">{props.linkText[index]}</div>
          </motion.div>
        )}

    </motion.div>
  );
};
