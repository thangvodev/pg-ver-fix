import React from "react";
import PieChartIcon from "../../static/icons/pie-chart.png";
import CalendarIcon from "../icons/CalendarIcon";
import { DatePicker } from "../common/date-picker";
import dayjs, { Dayjs } from "dayjs";

const Statistics = () => {
  const [panelVisible, setPanelVisible] = React.useState(false);

  const [dates, setDates] = React.useState<[Dayjs, Dayjs] | null>(() => [
    dayjs(),
    dayjs().add(1, "day"),
  ]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[12px]">
        <img src={PieChartIcon} alt="" className="size-[24px] object-contain" />
        <div className="flex flex-col gap-[4px]">
          <div className="text-base font-medium">Báo cáo</div>
          <div className="text-xs font-medium text-gray6">
            {dates
              ? `${dates[0].format("DD/MM/YYYY")} -
            ${dates[1].format("DD/MM/YYYY")}`
              : "Chọn ngày"}
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="flex items-center gap-[4px]"
          onClick={() => setPanelVisible(true)}
        >
          <div className="text-sm font-medium text-greenMinimap">Thay đổi</div>
          <CalendarIcon className="size-[20px] text-greenMinimap" />
        </div>
        <DatePicker.RangePicker
          open={panelVisible}
          styles={{
            root: {
              pointerEvents: "none",
              opacity: 0,
              position: "absolute",
              bottom: 0,
              right: 0,
              insetInlineStart: 0,
            },
          }}
          onChange={(ranges) => {
            if (ranges?.[0] && ranges?.[1]) {
              setDates([ranges[0], ranges[1]]);
            } else {
              setDates(null);
            }
            setPanelVisible(false);
          }}
        />
      </div>
    </div>
  );
};

export { Statistics };
