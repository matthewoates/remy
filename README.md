# Project Differentiator

It's easy to come up with new ideas - a far more challenging and useful task in the age of AI is idea pruning. The original intended scope of this project is to create a collaborative AI agent that facilitates the following interaction:

## Interaction Loop

- **user** provides high-level info about their company/project/idea
- **AI** researches competitors and their core features (using **Perplexity**)
- **UI** companies and their features are visualized as nodes, with associations visualized as edges in a graph
- **user** interacts with AI to collaborate on features to:
  - differentiate from competitors
  - identify widely used essential features across competitors
  - add features offered by the user's product
  - prune features offered by the user's product
  - update feature and company nodes

## Planned AI Tools

- **Perplexity**: research mode fires off many parallel requests quickly
- **OpenAI / other generic LLM**: (I've been playing with `minimax-m2:cloud` recently) support for ad-hoc manipulation. As a bonus, it's free through Ollama until Nov 7th.

## Features

- [x] Company and Feature nodes visualized in graph. This allows features to be normalized
- [x] edges are editable (the AI might not get everything right)
- [ ] iterate on prompts further (can more metadata be generated? can we get more context on features?)
- [ ] Nodes (name, user estimate, revenue) are editable manually
- [ ] prompt user to describe their company/project/idea
- [ ] make API requests via **Perplexity**
- [ ] implement chat with agent (including memory, and appropriately switching to a more conversational agent instead of the Perplexity research agent)
- [ ] chat
  - [ ] make API requests for chat interaction
  - [ ] implement UI for chat interaction
  - [ ] support updating nodes via interactive chat
  - [ ] chat with AI to identify features to differentiate from competition
- [ ] code polish (namely CSS styling strategy)
- [ ] improve styling

## Issues

- Some spaces have highly connected `company->feature` relationships. Potentially alternatively (or additionally?) present data in a more traditional tabular or list UI.
- Bucketing by feature is likely overly-simplistic. The same feature can be implemented in a more innovative and powerful way.

## Time spent

- 3h48m total
  - 2h18m dev time for submitted code
  - 60m (est) integrating and tuning a d3-force visualization (see [d3 example](https://d3js.org/d3-force) and [react-flow example](https://reactflow.dev/examples/layout/force-layout)]. This was canned, since the highly connected nature of nodes didn't play well with physics.
  - 30m (est) documentation, email

**Note: The force-layout feature was scrapped due to the visual noise and that it made the data harder to understand if the nodes were highly connected**

## Prompt

````ts
const query = `
I'm interested in building ${project_description}. Find top competitors in this space, and for each return the following info in this format:

\`\`\`ts

type FeatureID = string; // normalize shared features across companies

// company data
{
  name: string, // company name
  shortDescription: string,
  estimatedUserCount: number,
  estimatedYearlyRevenue: number, // USD
  coreFeatures: FeatureID[] // up to 5
}

// feature data
{
  id: FeatureID,
  description: string
}
\`\`\`
`;

---

# Setup

```bash
pnpm install
pnpm dev
````

# Usage Guide

Visit [http://localhost:3000/](http://localhost:3000) (or whatever URL the console says if port 3000 is already in use)

- You can drag nodes around, delete edges by clicking on them and hitting backspace, and draw new edges between nodes.

# Architecture Notes

- Uses `react-flow` for UI.
- Uses next.js. This is a decent full-stack starter, but may make less sense for apps that require a continuous server process and don't need serverless functionality.
