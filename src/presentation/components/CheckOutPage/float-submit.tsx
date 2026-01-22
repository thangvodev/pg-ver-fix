import React from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const FloatSubmit = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky inset-x-0 bottom-0 z-20 bg-white px-[16px] pb-[24px] pt-[12px]">
      <Button
        text={<div className="text-base font-medium text-white">Xác nhận</div>}
        className="w-full rounded-[32px] py-[14px]"
        style={{
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
        onClick={() => navigate("/home")}
      />
    </div>
  );
};

export { FloatSubmit };
