import React, { FC } from "react";

const DeliveryStatus: TDeliveryStatus = ({ status }) => {
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

const EventStatus: TEventStatus = ({ status }) => {
  switch (status) {
    case "ongoing":
      return (
        <div className="rounded-[24px] bg-infor1 px-[8px] py-[4px]">
          <div className="text-[11px] font-medium text-secondary4">
            Đang diễn ra
          </div>
        </div>
      );
    default:
      return null;
  }
};

export { DeliveryStatus, EventStatus };

type TDeliveryStatus = FC<{ status: "not-delivered" | "delivered" }>;
type TEventStatus = FC<{ status: "ongoing" }>;
