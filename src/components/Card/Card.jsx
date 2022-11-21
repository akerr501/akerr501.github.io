import { motion } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import "./card.css";

// Props should have following attributes
  // onClick : function to flip the card
  // active : boolean to determine if flipped
  // chips : list of strings for chip tags
  // chipColors : list of color indices to use for corresponding chips
  // image : string for image source
  // title : title of project



function Card(props) {
  return (
    <motion.div whileTap={{scale: 1.035}} whileHover={{ scale: 1.035}}>
      <div
        className={"mx-4 my-5 card-container" + (props.active ? " card-active" : "")}
        onClick={props.onClick}
      >
        <div className="content">
          <CardFront
            title={props.title}
            chips={props.chips}
            chipColors={props.chipColors}
            image={props.image}
            description={props.description}
            descriptionBolds={props.descriptionBolds}
          />
          <CardBack
            contributions={props.contributions}
            contributionBolds={props.contributionBolds}
            links={props.links}
            linkIcons={props.linkIcons}
            linkText={props.linkText}
            iconsList={props.icons}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
