import React from "react";
import CustomerImg from "../../static/images/customer.png";

const CustomerInfo = () => {
  return (
    <div
      className="flex items-center gap-[12px] rounded-[12px] bg-white px-[12px] py-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <img
        src={CustomerImg}
        alt=""
        className="size-[32px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-[4px]">
        <div className="text-xs font-normal text-gray6">
          Thông tin khách hàng
        </div>
        <div className="text-sm font-medium">
          Thu Hồng{" "}
          <span className="text-xs font-normal text-gray6">(039439856)</span>
        </div>
      </div>
    </div>
  );
};

export { CustomerInfo };
