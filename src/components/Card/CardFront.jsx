import { motion } from "framer-motion";
import Chip from '@mui/material/Chip';
import BoldText from "../BoldText";
import colors from '../../resources/colors.json';

function CardFront(props) {
  return (
    <div className="front">
      <img className="card-image" alt="" src={require('../../resources/' + props.image + '.png')} />
      <div className="title-text"><h6>{props.title}</h6></div>
        <div className="mb-3 descriptionText">
          <BoldText
            text={props.description}
            boldText={props.descriptionBolds} />
        </div>
      {props.chips.map(( chip, index ) =>
        <motion.div key={chip} className="list-chip-div m-1" whileHover={{ scale: 1.15}} transition={{ type: "spring", bounce: 0.66}}>
          <Chip
            label={chip}
            variant="outlined"
            size="small"
            sx={{
              "border-color": colors.chips[props.chipColors[index]],
              "color": colors.chips[props.chipColors[index]],
              "&:hover": {
                "color": "white",
                "background-color": colors.chips[props.chipColors[index]],
              }
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

export default CardFront;
