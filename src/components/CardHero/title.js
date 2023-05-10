import * as React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring, openSpring } from "./utils/animations";
import colors from '../../resources/data/colors.json';
import Chip from '@mui/material/Chip';


export const Title = (props) => {
  const inverted = useDeprecatedInvertedScale();
  const x = props.isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="title-container no-select"
      initial={false}
      animate={{ x, y }}
      transition={props.isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <h2>{props.title}</h2>
      {props.chips.map(( chip, index ) =>
        <motion.div key={chip} className="inline me-2" whileHover={{ scale: 1.15}} whileTap={{ scale: 1.15 }} transition={{ type: "spring", bounce: 0.66}}>
          <Chip
            label={chip}
            variant="outlined"
            // size="small"
            sx={{
              "color": "white",
              "background-color": colors.chips[props.chipColors[index]],
              "border-color": colors.chips[props.chipColors[index]],
            }}
          />
        </motion.div>
      )}

    </motion.div>
  );
};

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */
const scaleTranslate = ({ x, y, scaleX, scaleY }) => `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
