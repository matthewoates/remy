import { CompanyType } from "@/app/types";
import { Handle, Position } from "@xyflow/react";

type CompanyNodeProps = {
  data: CompanyType;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    notation: "compact",
    currency: "USD",
  }).format(amount);
}

function formatNumber(amount: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(amount);
}

function CompanyNode({ data }: CompanyNodeProps) {
  return (
    <>
      <div
        style={{ width: 160, height: 100, background: "white", color: "black" }}
      >
        <div>{data.name}</div>
        <div>{formatNumber(data.estimatedUserCount)} users</div>
        <div>{formatCurrency(data.estimatedYearlyRevenue)} / year</div>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable />
    </>
  );
}

export default CompanyNode;
