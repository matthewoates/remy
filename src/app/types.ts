type FeatureIDType = string;

export type CompanyType = {
  name: string;
  shortDescription: string;
  estimatedUserCount: number;
  estimatedYearlyRevenue: number;
  coreFeatures: FeatureIDType[];
};

export type FeatureType = {
  id: string;
  shortDescription: string;
  description: string;
};
