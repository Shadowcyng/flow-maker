// src/FlowEditor.js
import React, { useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import Sidebar from "./Sidebar";
import { useDrop } from "react-dnd";

const FlowEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "node",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const position = {
        x: offset.x - 250, // Adjust to match the canvas offset
        y: offset.y - 20, // Adjust to match the canvas offset
      };

      setNodes((nds) =>
        nds.concat({
          id: `${new Date().getTime()}`,
          type: "default",
          position,
          data: { label: item.label },
        })
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Sidebar />
      <div ref={drop} style={{ flex: 1, width: "100%", position: "relative" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={{ backgroundColor: "#B8CEFF", color: "black" }}
          fitView
        />
        {isOver && canDrop && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.1)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FlowEditor;
