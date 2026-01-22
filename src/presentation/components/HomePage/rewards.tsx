import React from "react";
import RewardIcon from "../../static/icons/present.png";

const Rewards = () => {
  return (
    <div className="flex items-center gap-[14px] rounded-[12px] border border-[#E6E6E699] px-[14px] py-[12px]">
      <img src={RewardIcon} alt="" className="size-[28px]" />
      <div className="flex flex-col gap-[2px]">
        <div className="text-sm font-normal text-gray7">Tổng số trả thưởng</div>
        <div className="text-lg font-bold">1234</div>
      </div>
    </div>
  );
};

export { Rewards };
