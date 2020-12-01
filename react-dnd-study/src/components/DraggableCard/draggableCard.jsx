import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ItemTypes } from "../../pages/demo1/Constants";
import Card from "../Card/card";

const DraggableCard = props => {
  const [{ }, dragRef, preview] = useDrag({
    item: { type: ItemTypes.CARD, ...props }
  })
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])
  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;
