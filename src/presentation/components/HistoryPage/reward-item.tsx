import React, { FC } from "react";

const RewardItem: TRewardItem = ({ name, quantity }) => {
  return (
    <div className="rounded-[12px] border border-gray1 px-[8px] py-[4px]">
      <span className="text-xs font-semibold text-[#999999]">{quantity}x </span>
      <span className="text-xs font-normal">{name}</span>
    </div>
  );
};

export { RewardItem };

type TRewardItem = FC<{ quantity: number; name: string }>;
