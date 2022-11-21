import {
  ScrollMenu,
  VisibilityContext,
  getItemsPos,
  slidingWindow
} from 'react-horizontal-scrolling-menu';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import useDrag from "./useDrag.ts";
import "./scroll.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function CardList({children}) {
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
    ev: React.MouseEvent
  ) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      onMouseDown={() => dragStart}
      onMouseUp={({
        getItemById,
        scrollToItem,
        visibleItems
      }: scrollVisibilityApiType) => () => {
        dragStop();
        const { center } = getItemsPos(visibleItems);
        scrollToItem(getItemById(center), "smooth", "center");
      }}
      options={{
        throttle: 0,
        ratio: 0.9,
        rootMargin: "10px",
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
      }}
      onMouseMove={handleDrag}
      >
      {children}
    </ScrollMenu>
  );
}



function onWheel(
  { getItemById, items, visibleItems, scrollToItem }: scrollVisibilityApiType,
  ev: React.WheelEvent
): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    const nextGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  } else if (ev.deltaY > 0) {
    const prevGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).prev();
    const { center } = getItemsPos(prevGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  }
}



function LeftArrow() {
  const { isFirstItemVisible, getPrevItem, scrollToItem } = React.useContext(VisibilityContext);
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", bounce: 0.7}}
        className="mx-2"
        style={{visibility: isFirstItemVisible ? 'hidden' : 'visible', height: '25%'}}
      >
        <Button
          style={{height: '100%'}}
          variant="outline-dark"
          onClick={(
            () => {
              const prevItem = getPrevItem();
              scrollToItem(prevItem?.entry?.target, "smooth", "start");
            }
          )}
        >
          <FaAngleLeft />
        </Button>
      </motion.div>
    );
}



function RightArrow() {
  const { isLastItemVisible, getNextItem, scrollToItem } = React.useContext(VisibilityContext);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", bounce: 0.7}}
      className="mx-2"
      style={{visibility: isLastItemVisible ? 'hidden' : 'visible', height: '25%'}}
    >
      <Button
        variant="outline-dark"
        onClick={(
          () => {
            const nextItem = getNextItem();
            scrollToItem(nextItem?.entry?.target, "smooth", "end");
          }
        )}
        style={{height: '100%'}}
        >
          <FaAngleRight />
        </Button>
      </motion.div>
  );
}

export default CardList;
