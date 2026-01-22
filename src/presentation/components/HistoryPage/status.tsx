import React, { FC } from "react";

const Status: TStatus = ({ status = "draft" }) => {
  switch (status) {
    case "confirmed":
      return (
        <div className="rounded-[24px] bg-infor1 px-[8px] py-[4px] text-[11px] font-medium text-secondary4">
          Đã xác nhận
        </div>
      );

    case "completed":
      return (
        <div className="rounded-[24px] bg-green1 px-[8px] py-[4px] text-[11px] font-medium text-green6">
          Đã hoàn thành
        </div>
      );

    default:
      return (
        <div className="rounded-[24px] bg-yellow1 px-[8px] py-[4px] text-[11px] font-medium text-yellow8">
          Đơn nháp
        </div>
      );
  }
};

export { Status };

type TStatus = FC<{ status: "draft" | "confirmed" | "completed" }>;
