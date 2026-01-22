import React, { FC } from "react";

const Tag: TTag = ({ amount, item }) => {
  return (
    <div className="flex h-[25px] items-center justify-center gap-[4px] rounded-[12px] border border-gray1 px-[8px]">
      <div className="text-xs font-medium text-[#999999]">{amount}x</div>
      <div className="text-xs font-normal">{item}</div>
    </div>
  );
};

export { Tag };

type TTag = FC<{ item?: string; amount?: number }>;
