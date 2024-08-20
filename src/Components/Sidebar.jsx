// src/Sidebar.js
import React, { useState } from "react";
import { useDrag } from "react-dnd";

const SidebarItem = ({ id, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "node",
    item: { id, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        margin: "4px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        cursor: "move",
        backgroundColor: "white",
        color: "black",
      }}
    >
      {label}
    </div>
  );
};

const Sidebar = () => {
  const [node, setNode] = useState();
  const [nodeList, setNodeList] = useState([
    "action",
    "response",
    "processing",
  ]);
  const handleAddNode = (node) => {
    setNodeList((prev) => [...prev, node]);
    setNode("");
  };
  return (
    <aside
      style={{
        width: "200px",
        background: "#f5f5f5",
        padding: "10px",
        height: "100%",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Nodes</h3>
      {nodeList?.map((item = {}) => (
        <SidebarItem id={item} label={item} />
      ))}

      {/* Add more SidebarItem components as needed */}
      <input value={node} onChange={(e) => setNode(e.target.value)} />
      <button onClick={() => handleAddNode(node)}>Add Node</button>
    </aside>
  );
};

export default Sidebar;
