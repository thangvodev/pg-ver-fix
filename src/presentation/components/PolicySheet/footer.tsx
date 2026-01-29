import React, { useState } from "react";
import PolicyFooter from "../../static/images/policy-footer.svg";
import { Button } from "../common/button";
import { Checkbox } from "../common/checkbox";
import { CodeSheet } from "../CodeSheet/code-sheet";
import { createUserRepository } from "../../../data/repositories/UserRepositoryImpl";
import { updatePhoneNameUseCase } from "../../../core/usecases/UpdatePhoneNameUseCase";
import { createZUserRepository } from "../../../data/repositories/ZUserRepositoryImpl";

const Footer = () => {
  const [checked, setChecked] = useState(false);
  const userRepository = createUserRepository();
  const zuserRepository = createZUserRepository();
  const updatePhoneName = updatePhoneNameUseCase(
    userRepository,
    zuserRepository,
  );

  return (
    <div className="relative z-10 -mt-[10px] flex h-[133px] items-center justify-center">
      <img
        src={PolicyFooter}
        alt=""
        className="absolute bottom-0 size-full object-cover object-top"
      />
      <div className="z-10 flex flex-col items-center gap-[12px] px-[28px]">
        <Checkbox
          color="#40A06F"
          children={
            <div className="text-xs font-normal text-white">
              Tôi đồng ý cung cấp thông tin cá nhận theo quy định về quyền riêng
              tư (Nghị định số 13/2023/NĐ - CP)
            </div>
          }
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <CodeSheet>
          {({ open }) => (
            <Button
              text={
                <div className="text-sm font-semibold text-greenMinimap">
                  Tham gia ngay
                </div>
              }
              className="relative flex h-[41px] w-fit flex-none items-center justify-center rounded-[24px] bg-white px-[40px]"
              style={{
                boxShadow: "0px 4px 12px 0px #0000001F",
                border: "2px solid #57F8A6",
              }}
              onClick={() => {
                updatePhoneName()
                  .then(() => open())
                  .catch(() => {});
              }}
              disabled={!checked}
            />
          )}
        </CodeSheet>
      </div>
    </div>
  );
};

export { Footer };
