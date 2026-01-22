import React from "react";
import PieChartIcon from "../../static/icons/pie-chart.png";
import CalendarIcon from "../icons/CalendarIcon";
import { DatePicker } from "../common/date-picker";
import { Dayjs } from "dayjs";

const Statistics = () => {
  const [panelVisible, setPanelVisible] = React.useState(false);

  const [date, setDate] = React.useState<Dayjs | null>(null);

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
      <div className="relative">
        {date ? (
          <div
            className="text-greenMinimap"
            onClick={() => setPanelVisible(true)}
          >
            {date.format("DD/MM/YYYY")}
          </div>
        ) : (
          <div
            className="flex items-center gap-[4px]"
            onClick={() => setPanelVisible(true)}
          >
            <div className="text-sm font-medium text-greenMinimap">
              Thay đổi
            </div>
            <CalendarIcon className="size-[20px] text-greenMinimap" />
          </div>
        )}
        <DatePicker
          open={panelVisible}
          styles={{
            root: {
              pointerEvents: "none",
              opacity: 0,
              position: "absolute",
              bottom: -12,
              right: 0,
              insetInlineStart: 0,
            },
          }}
          onChange={(date) => {
            setDate(date);
            setPanelVisible(false);
          }}
        />
      </div>
    </div>
  );
};

export { Statistics };
