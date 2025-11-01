import type { CompanyType } from "../types";

const companies: CompanyType[] = [
  {
    id: "Board Game Arena",
    name: "Board Game Arena",
    shortDescription:
      "The largest online board game platform with 500+ licensed titles, supporting play on browser and mobile.",
    estimatedUserCount: 6_000_000, // active users
    estimatedYearlyRevenue: 18_000_000, // USD, subscription/in-app/ads
    coreFeatures: [
      "crossPlatformPlay",
      "asyncMultiplayer",
      "licensedContent",
      "AIPlay",
      "tutorialsRules",
    ],
  },
  {
    id: "Dire Wolf Digital",
    name: "Dire Wolf Digital",
    shortDescription:
      "Renowned developer of premium board game apps featuring digital adaptations of top modern classics.",
    estimatedUserCount: 2_500_000, // cumulative downloads
    estimatedYearlyRevenue: 10_000_000, // based on premium pricing/market share
    coreFeatures: [
      "licensedContent",
      "AIPlay",
      "crossPlatformPlay",
      "tutorialsRules",
    ],
  },
  {
    id: "Dized (Playmore Games)",
    name: "Dized (Playmore Games)",
    shortDescription:
      "Specializes in interactive tutorials and rulebook apps, partnering with publishers for classic and new board games.",
    estimatedUserCount: 500_000,
    estimatedYearlyRevenue: 2_500_000,
    coreFeatures: [
      "tutorialsRules",
      "licensedContent",
      "crossPlatformPlay",
      "asyncMultiplayer",
    ],
  },
  {
    id: "BG Stats",
    name: "BG Stats",
    shortDescription:
      "The most popular board game stat tracking app, integrating with BoardGameGeek to log play history and statistics.",
    estimatedUserCount: 350_000,
    estimatedYearlyRevenue: 900_000,
    coreFeatures: ["crossPlatformPlay", "AIPlay"], // Note: not a board game "play" app, but top in companion/stats
  },
];

export default companies;
