"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

function Canvas() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ width: "100vw", height: "100vh", color: "black" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) =>
          setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot))
        }
        onEdgesChange={(changes) =>
          setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot))
        }
        onConnect={(params) =>
          setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot))
        }
        fitView
      />
    </div>
  );
}

export default Canvas;
