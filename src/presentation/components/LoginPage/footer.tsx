import React, { FC } from "react";
import LoginFooter from "../../static/images/login-footer.svg";
import { Button } from "../common/button";
import { PolicySheet } from "../PolicySheet/policy-sheet";
import { Checkbox } from "../common/checkbox";
import { User } from "../../../core/entities/User";
import { CodeSheet } from "../CodeSheet/code-sheet";

const Footer: TFooter = ({ user }) => {
  return (
    <div className="relative flex h-[154px]">
      <img
        src={LoginFooter}
        alt=""
        className="absolute bottom-0 size-full object-cover object-top"
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-[20px] px-[16px]">
        {user?.phone ? (
          <CodeSheet>
            {({ open }) => (
              <Button
                text={
                  <div className="text-sm font-semibold text-greenMinimap">
                    Đăng nhập
                  </div>
                }
                className="relative z-10 flex h-[41px] flex-none items-center justify-center rounded-[24px] bg-white px-[40px]"
                style={{
                  boxShadow: "0px 4px 12px 0px #0000001F",
                  border: "2px solid #57F8A6",
                }}
                onClick={open}
              />
            )}
          </CodeSheet>
        ) : (
          <PolicySheet>
            {({ open }) => (
              <Button
                text={
                  <div className="text-sm font-semibold text-greenMinimap">
                    Đăng nhập
                  </div>
                }
                className="relative z-10 flex h-[41px] flex-none items-center justify-center rounded-[24px] bg-white px-[40px]"
                style={{
                  boxShadow: "0px 4px 12px 0px #0000001F",
                  border: "2px solid #57F8A6",
                }}
                onClick={open}
              />
            )}
          </PolicySheet>
        )}
        <Checkbox
          color="#40A06F"
          children={
            <div className="text-xs font-normal text-white">
              Nhấn “Đăng nhập" tôi đồng ý với{" "}
              <span className="text-yellow5">Điều khoản và thể lệ </span>
              của chương trình
            </div>
          }
        />
      </div>
    </div>
  );
};

export { Footer };

type TFooter = FC<{
  user?: User;
}>;
