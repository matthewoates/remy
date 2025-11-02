"use client";

import { useState } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import features from "@/app/demo_data/features";
import companies from "@/app/demo_data/companies";
import CompanyNode from "./nodes/CompanyNode";

const nodeTypes = {
  company: CompanyNode,
};

const initialNodes: Node[] = [];

companies.forEach((company, i) => {
  initialNodes.push({
    id: company.id,
    type: "company",
    data: {
      label: company.name,
      ...company,
    },
    position: { x: i * 180, y: 0 },
  });
});

features.forEach((feature, i) => {
  initialNodes.push({
    id: feature.id,
    data: {
      label: feature.shortDescription,
    },
    position: { x: i * 180, y: 300 },
  });
});

const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

function makeEdge(source: string, target: string) {
  return {
    id: `${source}-${target}`,
    source,
    target,
  };
}

companies.forEach((company) => {
  company.coreFeatures.forEach((featureID) => {
    initialEdges.push(makeEdge(company.id, featureID));
  });
});

function Canvas() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ width: "100vw", height: "100vh", color: "black" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        defaultEdgeOptions={{ type: "straight" }}
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
