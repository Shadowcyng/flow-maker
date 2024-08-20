import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  NODE: "node",
};

const SidePanel = () => {
  //   const [{ isDragging }, drag] = useDrag(() => ({
  //     type: ItemTypes.NODE,
  //     item: { type: "custom", label: "Dragged Node" },
  //     collect: (monitor) => ({
  //       isDragging: !!monitor.isDragging(),
  //     }),
  //   }));

  return (
    <div className="node-panel">
      <div draggable className="node">
        Start Node
      </div>
      <div draggable className="node">
        Action Node
      </div>
      <div draggable className="node">
        Decision Node
      </div>
      <div draggable className="node">
        End Node
      </div>
    </div>
  );
};

export default SidePanel;
