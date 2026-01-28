import React, { FC, useEffect, useState } from "react";
import Checkin from "../../static/images/checkin.png";
import Scan from "../../static/images/scan.png";
import Checkout from "../../static/images/checkout.png";
import History from "../../static/images/history.png";
import clsx from "clsx";
import { CheckInSheet } from "../CheckInSheet/checkin-sheet";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { RewardPopup } from "../ScanQRPage/reward-popup";

const Features = () => {
  const navigate = useNavigate();
  const {isCheckInDone} = React.useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  


  return (
    <div className="flex flex-col gap-[12px]">
      <RewardPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    
      {!isCheckInDone &&      
        <CheckInSheet>
          {({ open }) => (
            <Feature
              title="Check-in"
              description={
                <div className="text-[11px] font-normal text-gray7">
                  Checkin để bắt đầu một ngày làm việc
                </div>
              }
              icon={Checkin}
              background="linear-gradient(180deg, #FDFFF5 0%, #D8FFE2 100%)"
              onClick={open}
            />
          )}
        </CheckInSheet>
      }

      <Feature
        title="Scan mã QR"
        description={
          <div className="text-[11px] font-normal text-gray7">
            Quét mã để trả phần thưởng cho khách hàng
          </div>
        }
        icon={Scan}
        background="linear-gradient(93.54deg, rgba(110, 255, 238, 0.16) 0.3%, rgba(0, 183, 255, 0.34) 99.7%)"
        onClick={() => {
          if(!isCheckInDone) return;
          setIsModalOpen(true);
          // navigate("/scan")
        }}
        disabled={!isCheckInDone}
        
      />
      <Feature
        title="Lịch sử"
        description={
          <div className="text-[11px] font-normal text-gray7">
            Danh sách quà tặng của khách hàng tham gia
          </div>
        }
        icon={History}
        background="linear-gradient(93.54deg, rgba(255, 235, 211, 0.62) 0.3%, rgba(255, 225, 57, 0.5) 99.7%)"
        onClick={() => {
          if(!isCheckInDone) return;
          navigate("/history")
        }}
        disabled={!isCheckInDone}
      />
      {isCheckInDone &&
        <Feature
          title="Checkout"
          description={
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[4px]">
                <div className="text-[11px] font-normal text-gray7">
                  Đã checkin lúc:
                </div>
                <div className="rounded-[12px] border border-red5 bg-white px-[4px] py-[2px]">
                  <div className="text-[11px] font-normal text-red5">
                    12:00, 25/12/2025
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-normal text-gray7">
                Tại điểm: 123 Lý Thường Kiệt, quận 10
              </div>
            </div>
          }
          icon={Checkout}
          background="linear-gradient(180deg, rgba(255, 220, 202, 0.18) 0%, #FFDCD8 100%)"
          onClick={() => navigate("/checkout")}
        />
      }
    </div>
  );
};

const Feature: TFeature = ({
  background,
  description,
  icon,
  title,
  visible = true,
  disabled,
  onClick,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx("relative h-[90px] w-full", {
        "pointer-events-none opacity-50": disabled,
      })}
      onClick={onClick}
    >
      {/* SVG mask */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="feature-shape" clipPathUnits="objectBoundingBox">
            <path d="M0 0.0889 C0 0.0398 0.0104 0 0.0233 0 H0.677 C0.682 0 0.686 0.0045 0.689 0.013 L0.793 0.254 C0.795 0.277 0.799 0.299 0.803 0.267 L0.98 0.338 C0.997 0.342 1 0.381 1 0.427 V0.911 C1 0.96 0.99 1 0.977 1 H0.0233 C0.0104 1 0 0.96 0 0.911 V0.0889 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* Content */}
      <div
        className="flex h-[90px] items-center justify-between gap-[8px] rounded-[8px] px-[20px]"
        style={{
          background: background,
          clipPath: "url(#feature-shape)",
        }}
      >
        <div className="flex flex-col gap-[12px]">
          <div className="text-base font-semibold">{title}</div>
          <>{description}</>
        </div>
      </div>
      {/* Icon */}
      <img
        src={icon}
        alt=""
        className="absolute right-[20px] top-0 max-h-[85px] -translate-y-[12px] object-contain"
      />
    </div>
  );
};

export { Features };

type TFeature = FC<{
  icon?: string;
  background?: string;
  title?: string;
  description?: React.ReactNode;
  visible?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}>;
