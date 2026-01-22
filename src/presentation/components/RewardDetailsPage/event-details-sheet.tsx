import { CloseCircleFilled, CloseOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import BannerImg from "../../static/images/banner-reward.png";
import { EventStatus } from "./status";
import ClockIcon from "../icons/ClockIcon";
import UserIcon from "../../static/icons/user.png";
import PhoneIcon from "../../static/icons/phone.png";
import { Button } from "../common/button";

const EventDetailsSheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative pt-[20px]">
                <div className="text-lg font-semibold leading-none text-gray9">
                  Chi tiết sự kiện
                </div>
                <div
                  className="absolute right-[16px] top-[20px] flex items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="text-[20px] text-gray6" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFFFFF",
            overflow: "visible",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}
          className="flex flex-col"
        >
          <div className="mt-[12px] flex flex-1 flex-col gap-[12px] overflow-auto">
            <img src={BannerImg} alt="" />
            <div className="flex flex-col items-center gap-[12px] px-[16px]">
              <div className="text-lg font-semibold">
                Event Mua 1 tặng 1 Pizza Hut
              </div>
              <div className="flex items-center gap-[10px]">
                <EventStatus status="ongoing" />
                <div className="flex gap-[4px] rounded-[12px] bg-alert1 px-[8px] py-[4px]">
                  <ClockIcon className="size-[12px] text-alert4" />
                  <div className="text-[11px] font-medium text-alert4">
                    01/11/25 - 11/11/25
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[5px]">
                  <img src={UserIcon} className="size-[14px]" />
                  <div className="text-[11px] font-normal text-neutral8">
                    Quản lý: Cao Minh Mẫn
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img src={PhoneIcon} className="size-[14px]" />
                  <div className="text-[11px] font-normal text-neutral8">
                    0132284935
                  </div>
                </div>
              </div>
              <div className="whitespace-pre-wrap text-sm font-normal">
                {`1. Chương trình này mình sẽ chạy các kênh sau:
- Kênh tạp hóa GT
- Kênh chung cư 
- Ngoài ra Lâm đang add thêm phần Mer check và giao hàng (phần này nếu ko kịp app vẫn đc, nếu đc thêm phần tracking giao hàng thôi thì tốt)

2. Scheme: mua 1 thùng 500ml thì có cơ hội nhận 1 vòng quay may mắn trên app, trúng 1 phần quà trong các phần quà dưới
3. Các thông tin cần lấy khách hàng: tên, sdt, địa chỉ, đơn hàng, quà tặng,...`}
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 bg-white px-[16px] pb-[24px] pt-[12px]">
            <Button
              text={
                <div className="text-base font-medium text-white">Đóng</div>
              }
              className="w-full rounded-[32px] px-[10px] py-[14px]"
              style={{
                background:
                  "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
              }}
              onClick={() => setVisible(false)}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { EventDetailsSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
