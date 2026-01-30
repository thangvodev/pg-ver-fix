import React, { FC } from "react";
import PolicyBg from "../../static/images/policy-bg.svg";
import { Policy } from "../../../core/entities/Policy";
import { htmlParse } from "../../utils/htmlParser";

const PolicyContainer: TPolicy = ({ policy }) => {
  return (
    <div className="relative -mt-[30px] flex flex-1 overflow-hidden">
      <img
        src={PolicyBg}
        alt=""
        className="absolute top-0 w-full object-cover"
      />
      <div className="relative z-10 mb-[10px] mt-[40px] flex-1 overflow-auto font-manrope">
        <div className="flex flex-col items-center justify-center gap-[14px] px-[46px]">
          <div className="text-lg font-semibold text-[#065710]">
            Điều khoản & Thể lệ
          </div>
          <div>{htmlParse(policy?.description)}</div>
        </div>
      </div>
    </div>
  );
};
export { PolicyContainer };

type TPolicy = FC<{
  policy?: Policy;
}>;
