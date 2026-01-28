import React, { FC } from "react";
import { Status } from "./status";
import { RewardItem } from "./reward-item";
import ClockFilledIcon from "../icons/ClockFilledIcon";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router";

const RewardList = () => {
  return (
    <div className="flex flex-col gap-[20px] pb-[16px]">
      <RewardListItem status="confirmed" />
      <RewardListItem status="draft" />
      <RewardListItem status="completed" />
      <RewardListItem status="confirmed" price={120000} />
    </div>
  );
};

const RewardListItem: TRewardListItem = ({ status, price }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-[8px] rounded-[12px] bg-white px-[12px] py-[10px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      onClick={()=> {
        navigate("/reward/1");
      }}
    >
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <Status status={status} />
            <div className="text-sm font-normal text-neutral6">Đơn #1232</div>
          </div>
          <div className="text-base font-medium">
            Thu Hồng <span className="text-gray6">(012343454)</span>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <RewardItem name="Chai nước lavie" quantity={1} />
          <RewardItem name="Chai nước lavie" quantity={1} />
        </div>
        <div className="flex items-center gap-[8px]">
          <ClockFilledIcon className="size-[18px] text-gray4" />
          <div className="text-xs font-normal text-gray8">
            09:32, 12/01/2026
          </div>
        </div>
      </div>
      {price ? (
        <>
          <Divider className="m-0" />
          <div className="flex items-center justify-between">
            <div className="text-sm font-normal text-neutral6">Tổng tiền</div>
            <div className="text-base font-medium">{formatCurrency(price)}</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export { RewardList };

type TRewardListItem = FC<{
  status: "draft" | "confirmed" | "completed";
  price?: number;
}>;
