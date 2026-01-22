import React, { FC } from "react";

const Status: TStatus = ({ status }) => {
  switch (status) {
    case "not-delivered":
      return (
        <div className="rounded-[24px] bg-yellow1 px-[8px] py-[4px]">
          <div className="text-[11px] font-medium text-yellow8">
            Chưa giao hàng
          </div>
        </div>
      );

    case "delivered":
      return (
        <div className="rounded-[24px] bg-green1 px-[8px] py-[4px]">
          <div className="text-[11px] font-medium text-green6">
            Đã hoàn thành
          </div>
        </div>
      );

    default:
      return null;
  }
};

export { Status };

type TStatus = FC<{ status: "not-delivered" | "delivered" }>;
