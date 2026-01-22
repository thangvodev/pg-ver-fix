import React from "react";
import { Divider } from "antd";
import LocationIcon from "../../static/icons/location.png";

const LocationPicker = () => {
  return (
    <div className="flex items-center justify-between rounded-[8px] border border-gray2 bg-white p-[12px]">
      <div className="flex items-center gap-[8px]">
        <img src={LocationIcon} className="size-[20px] object-contain" />
        <div className="text-sm font-normal">Lat: 123243</div>
        <Divider type="vertical" className="m-0 h-[9px]" />
        <div className="text-sm font-normal">Long: 123343</div>
      </div>
      <div className="text-xs font-normal text-greenMinimap">Xem bản đồ</div>
    </div>
  );
};

export { LocationPicker };
