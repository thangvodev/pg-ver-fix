import React, { FC } from "react";

const Status: TStatus = ({ status }) => {
  switch (status) {
    case "confirmed":
      return (
        <div className="flex items-center justify-center rounded-[24px] bg-infor1 px-[8px] py-[4px]">
          <div className="text-[11px] font-medium text-secondary4">
            Đã xác nhận
          </div>
        </div>
      );

    case "delivering":
      return (
        <div className="flex items-center justify-center rounded-[24px] bg-yellow1 px-[8px] py-[4px]">
          <div className="text-[11px] font-medium text-yellow8">
            Đang giao hàng
          </div>
        </div>
      );

    case "delivered":
      return (
        <div className="flex items-center justify-center rounded-[24px] bg-green1 px-[8px] py-[4px]">
          <div className="text-[11px] font-medium text-success4">
            Đã hoàn thành
          </div>
        </div>
      );

    default:
      return null;
  }
};

export { Status };

type TStatus = FC<{ status: "confirmed" | "delivering" | "delivered" }>;
