import * as React from "react";
import { memo, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInvertedBorderRadius } from "./utils/use-inverted-border-radius";
import { ExtendedContent } from "./extendedcontent";
import { Title } from "./title";
import { Image } from "./image";
import { openSpring, closeSpring } from "./utils/animations";
import { useScrollConstraints } from "./utils/use-scroll-constraints";
import { useWheelScroll } from "./utils/use-wheel-scroll";


// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 100;

export const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    onClick,
    pointOfInterest,
    backgroundColor,
    chips,
    chipColors,
    image,
    description,
    descriptionBolds,
    contributions,
    contributionBolds,
    links,
    linkIcons,
    linkText,
    iconsList,
    theme,
  }) => {

    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    const [passedDrag, updateDrag] = useState(false);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function toggleSelect() {
      onClick();
      y.set(0);
      zIndex.set(0);
    }

    function checkSwipeToDismiss(event, info) {
      if(event.pointerType === undefined && y.get() > dismissDistance) toggleSelect();
      if(!passedDrag && y.get() > dismissDistance) updateDrag(true);
      else if (passedDrag && y.get() < dismissDistance) updateDrag(false);
    }

    function checkZIndex(latest) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );

    return (
      <li ref={containerRef} className={`card-hero`}>
        <Overlay isSelected={isSelected} onClick={toggleSelect} />
        <motion.div
          className={`card-hero-content-container ${isSelected && "open"}`}
          onClick={isSelected ? null : toggleSelect}
          whileHover={{ scale: isSelected ? 1 : 1.03}}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0}}
          transition={{ duration: 0.3 }}
          // viewport={{ once: true }}
        >
          <motion.div
            ref={cardRef}
            className={"card-hero-content"}
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onDragEnd={ passedDrag ? toggleSelect : null}
            onUpdate={checkZIndex}
          >
            <Image
              id={image}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
            />
            <Title
              title={title}
              isSelected={isSelected}
              chips={chips}
              chipColors={chipColors}
            />
            <ExtendedContent
              theme={theme}
              contributions={contributions}
              contributionBolds={contributionBolds}
              links={links}
              linkIcons={linkIcons}
              linkText={linkText}
              iconsList={iconsList}
              description={description}
              descriptionBolds={descriptionBolds}
            />
          </motion.div>
        </motion.div>
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected, onClick }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <div onClick={onClick}></div>
  </motion.div>
);
