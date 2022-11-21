import Chip from '@mui/material/Chip';
import { motion } from "framer-motion";
import colors from '../../resources/colors.json';
import { FiInfo } from "react-icons/fi";
import { IconContext } from "react-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useRef } from 'react';


function SkillsDetails(props) {
  const ref = useRef(null);

  return (
      <div className="skills-section mb-1">
        {props.title !== undefined &&
          <div className="resume-details-title mb-2" ref={ref}>
            {props.title}
            <OverlayTrigger
              placement="right"
              container={ref}
              overlay={<Tooltip id={props.title}>{props.infoText}</Tooltip>}
            >
              <div>
                <IconContext.Provider value={{ size: "0.90em", className: "ms-1 pb-1" }}>
                  <FiInfo />
                </IconContext.Provider>
              </div>
            </OverlayTrigger>
          </div>
        }
        {props.skills.map(( item ) =>
          <motion.div key={item.value} className="list-chip-div m-1" whileHover={{ scaleY: 1.175, scaleX: 1.125}} transition={{ type: "spring", bounce: 0.66}}>
            <Chip
              label={item.value}
              variant="outlined"
              size="large"
              sx={{
                "border-color": colors.chips[item.color],
                "color": colors.chips[item.color],
                "&:hover": {
                  "color": "white",
                  "background-color": colors.chips[item.color],
                }
              }}
            />
          </motion.div>
        )}
      </div>
  );
}

export default SkillsDetails;
