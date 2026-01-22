import React, { FC } from "react";
import BannerImg from "../../static/images/banner-reward.png";
import LogoImg from "../../static/images/pizzahut-logo.png";
import { DeliveryStatus } from "./status";
import { EventDetailsSheet } from "./event-details-sheet";

const Banner: TBanner = ({ status }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[12px]">
        <img src={BannerImg} alt="" className="h-[182px] object-cover" />
        <div className="flex items-center justify-center gap-[8px]">
          <img src={LogoImg} alt="" className="size-[40px] object-contain" />
          <div className="text-sm font-normal">Pizza Hut</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[4px]">
        <div className="text-lg font-medium">Sắn quà khủng cùng Domino</div>
        <EventDetailsSheet>
          {({ open }) => (
            <div className="text-sm font-medium text-blue5" onClick={open}>
              Chi tiết chương trình
            </div>
          )}
        </EventDetailsSheet>

        <div className="flex items-center gap-[12px]">
          <div className="text-sm font-normal text-gray7">
            10:30, 31/12/2025
          </div>
          <DeliveryStatus status={status} />
        </div>
      </div>
    </div>
  );
};

export { Banner };

type TBanner = FC<{ status: "not-delivered" | "delivered" }>;
