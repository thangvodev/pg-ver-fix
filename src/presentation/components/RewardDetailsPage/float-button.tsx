import React, { FC } from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const FloatButton: TFloatButton = ({ status, setStatus }) => {
  const navigate = useNavigate();

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
            onClick={() => setStatus("delivered")}
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
              onClick={() => navigate("/home")}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="sticky bottom-0 z-20 bg-white px-[16px] pb-[24px] pt-[12px]">
      {ButtonRender()}
    </div>
  );
};

export { FloatButton };

type TFloatButton = FC<{ status: Status; setStatus: (status: Status) => void }>;
type Status = "not-delivered" | "delivered";
