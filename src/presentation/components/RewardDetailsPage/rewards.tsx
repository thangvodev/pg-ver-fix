import { Divider } from "antd";
import React from "react";
import RewardImg from "../../static/images/reward.png";

const Rewards = () => {
  return (
    <div
      className="flex flex-col gap-[14px] rounded-[12px] bg-white px-[16px] py-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-[8px]">
            <img src={RewardImg} alt="" className="w-[54px] object-contain" />
            <div className="text-xs font-medium">1 đĩa mì ý hải sản</div>
          </div>
          {index < 1 && <Divider dashed className="m-0" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export { Rewards };
