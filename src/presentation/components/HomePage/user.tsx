import React from "react";
import CustomerImg from "../../static/images/customer.png";

const User = () => {
  return (
    <div
      className="flex items-center justify-between rounded-[8px] bg-white px-[16px] py-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #E6E6E633" }}
    >
      <div className="flex items-center gap-[12px]">
        <img
          src={CustomerImg}
          alt=""
          className="size-[48px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-[2px]">
          <div className="text-lg font-semibold">Hi Jason Nguyễn </div>
          <div className="text-sm font-normal text-gray7">01234646</div>
        </div>
      </div>
    </div>
  );
};

export { User };
