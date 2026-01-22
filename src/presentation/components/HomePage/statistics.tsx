import React from "react";
import PieChartIcon from "../../static/icons/pie-chart.png";
import CalendarIcon from "../icons/CalendarIcon";

const Statistics = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[12px]">
        <img src={PieChartIcon} alt="" className="size-[24px] object-contain" />
        <div className="flex flex-col gap-[4px]">
          <div className="text-base font-medium">Báo cáo</div>
          <div className="text-xs font-medium text-gray6">
            01/01/2026 - 31/01/2026
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[4px]">
        <div className="text-sm font-medium text-greenMinimap">Thay đổi</div>
        <CalendarIcon className="size-[20px] text-greenMinimap" />
      </div>
    </div>
  );
};

export { Statistics };
