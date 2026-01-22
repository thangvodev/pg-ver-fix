import React, { FC } from "react";
import { Button } from "../common/button";

const FloatButton: TFloatButton = ({ status }) => {
  const ButtonRender = () => {
    switch (status) {
      case "not-delivered":
        return (
          <Button
            text={
              <div className="text-base font-medium text-white">Xác nhận</div>
            }
            className="w-full rounded-[32px] px-[10px] py-[14px]"
            style={{
              background:
                "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
            }}
          />
        );

      case "delivered":
        return (
          <div className="flex flex-col gap-[12px]">
            <Button
              text={
                <div className="text-base font-medium text-greenMinimap">
                  Tiếp tục quét mã QR
                </div>
              }
              className="w-full rounded-[32px] bg-green1 px-[10px] py-[14px]"
            />
            <Button
              text={
                <div className="text-base font-medium text-greenMinimap">
                  Về trang chủ
                </div>
              }
              className="w-full rounded-[32px] border border-greenMinimap bg-white px-[10px] py-[14px]"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="sticky bottom-0 bg-white px-[16px] pb-[24px] pt-[12px]">
      {ButtonRender()}
    </div>
  );
};

export { FloatButton };

type TFloatButton = FC<{ status: "not-delivered" | "delivered" }>;
