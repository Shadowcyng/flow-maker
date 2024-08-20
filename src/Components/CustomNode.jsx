// src/CustomNode.js
import React from "react";

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: "1px solid #ddd", borderRadius: 5 }}>
      <strong>{data.label}</strong>
      <div>
        <button onClick={data.onAddCondition}>+ Condition</button>
        <button onClick={data.onAddAction}>+ Action</button>
      </div>
    </div>
  );
};

export default CustomNode;
