import { motion } from "framer-motion";
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaRegCopy } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import "./icon.css"
import { toast } from 'react-toastify';


const emojis = ['🚀', '✔️', '👋', '😎', '👀']

function IconBuilder(props) {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };

  const handleIconClick = () => {
    window.open(props.link);
  };

  const handleCopyClick = () => {
    const randEmoji = Math.floor(Math.random() * 5);
    toast("Copied to clipboard!", {
        position: toast.POSITION.TOP_CENTER,
        toastId: props.link,
        icon: emojis[randEmoji],
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      }
    );
    navigator.clipboard.writeText(props.link);
  }


  return (
    <Col className="justify-content-center icon-column align-middle mb-2">
      <IconContext.Provider value={{ style: {cursor: "pointer"}, size: "40px", className: "my-3" }}>
        <motion.div
          transition={{ type: "spring", stiffness: "45"}}
          onClick={(props.copyBoth ? handleCopyClick : handleIconClick)}
          whileHover={{ scale: 1.125, rotate: 360}}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            color: isHover ? (props.theme==="light" ? props.tapColor : props.hoverColor) :  "inherit",
            transitionDuration: "0.1s"
          }}
        >
          {props.children}
        </motion.div>
      </IconContext.Provider>
      <motion.div
        whileHover={{ backgroundColor: props.hoverColor, scale: 1.05 }}
        whileTap={{ backgroundColor: props.tapColor, scale: 0.95}}
        onClick={handleCopyClick}
        transition={{ type: "spring", bounce: 0.7}}
        className="icon-text no-select small-shadow px-1 align-middle">
          {props.name}
          <IconContext.Provider value={{ style: { verticalAlign: 'middle'}, className:"pb-1"}}>
            <FaRegCopy />
          </IconContext.Provider>
      </motion.div>
    </Col>
  );
}

export default IconBuilder;
