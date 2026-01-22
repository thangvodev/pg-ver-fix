import React from "react";
import { User } from "./user";
import { Statistics } from "./statistics";
import { Rewards } from "./rewards";
import { Features } from "./features";

const Content = () => {
  return (
    <div className="relative z-10 flex flex-col gap-[16px]">
      <div className="px-[16px]">
        <User />
      </div>
      <div className="flex flex-col gap-[20px] px-[16px]">
        <Statistics />
        <div className="flex flex-col gap-[16px]">
          <Rewards />
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Content;
