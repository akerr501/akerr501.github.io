import * as React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "./utils/animations";

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor
}) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="card-image-container no-select"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
      initial={false}
      animate={isSelected ? { x: 0, y: 0 } : { x: -pointOfInterest, y: 0 }}
      transition={closeSpring}
    >

        <img className="card-hero-image" alt="" src={require('../../resources/images/' + id + '.png')} />

      {/* <motion.img
        className="card-hero-image"
        src={require('../../resources/' + id + '.png')}
        alt=""
        initial={false}
        animate={isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }}
        transition={closeSpring}
      /> */}
    </motion.div>
  );
};
