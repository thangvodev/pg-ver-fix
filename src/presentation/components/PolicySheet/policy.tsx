import React, { FC } from "react";
import PolicyBg from "../../static/images/policy-bg.svg";

const policies = [
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const Policy = () => {
  return (
    <div className="relative -mt-[30px] flex flex-1 overflow-hidden">
      <img
        src={PolicyBg}
        alt=""
        className="absolute top-0 w-full object-cover"
      />
      <div className="relative z-10 mb-[10px] mt-[40px] flex-1 overflow-auto font-manrope rule mr-[10px]">
        <div className="flex flex-col items-center justify-center gap-[14px] px-[46px] ">
          <div className="text-lg font-semibold text-[#065710]">
            Điều khoản & Thể lệ
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="text-sm font-medium text-gray6">
              Chương trình diễn ra từ ngày 12/5 - 14/6
            </div>
            {policies.map((policy, index) => (
              <PolicyItem
                key={index}
                title={policy.title}
                content={policy.content}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PolicyItem: TPolicyItem = ({ content, title, index }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-[15px] font-semibold text-[#042B0B]">
        {index + 1}. {title}
      </div>
      <div className="text-sm font-normal text-gray6">{content}</div>
    </div>
  );
};

export { Policy };

type TPolicyItem = FC<{
  title: string;
  content: string;
  index: number;
}>;
