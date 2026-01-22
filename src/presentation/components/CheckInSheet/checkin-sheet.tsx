import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { SearchBarNoPopup } from "../common/search-bar";
import { Divider } from "antd";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import SearchNormalIcon from "../icons/SearchNormalIcon";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const CheckInSheet: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const data = [
    {
      name: "Rạp CGV Metro",
      address: "39 đường số 6, phừong 11, TP.HCM",
      distance: "234.99m",
      value: "1",
    },
    {
      name: "Rạp CGV Metro",
      address: "39 đường số 6, phừong 11, TP.HCM",
      distance: "250m",
      value: "2",
    },
    {
      name: "Rạp CGV Metro",
      address: "39 đường số 6, phừong 11, TP.HCM",
      distance: "1km",
      value: "3",
    },
    {
      name: "Rạp CGV Metro",
      address: "39 đường số 6, phừong 11, TP.HCM",
      distance: "2km",
      value: "4",
    },
  ];

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative pt-[20px]">
                <div className="text-lg font-semibold leading-none text-gray9">
                  Chọn điểm bán để check-in
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
          className="font-manrope"
        >
          <Divider className="my-[12px]" />
          <Form form={form} className="flex flex-1 flex-col gap-[12px]">
            <div className="px-[16px]">
              <SearchBarNoPopup
                placeholder="Tìm điểm bán"
                className="h-[44px] rounded-[8px] text-xs"
                prefix={<SearchNormalIcon className="size-[20px] text-gray5" />}
                suffixIcon={null}
              />
            </div>
            <Form.Item name="checkin" noStyle>
              <Radio.ButtonGroup
                items={data}
                render={(item) => (
                  <div className="flex items-center justify-between px-[16px] py-[10px]">
                    <div className="flex flex-col gap-[4px]">
                      <div className="text-base font-medium">{item?.name}</div>
                      <div className="text-sm font-normal">{item?.address}</div>
                    </div>
                    <div className="text-sm font-normal text-[#EF3E27]">
                      {item?.distance}
                    </div>
                  </div>
                )}
                activeRender={(item) => (
                  <div className="mx-[8px] flex items-center justify-between rounded-[12px] border border-[#2CBC74] px-[14px] py-[10px]">
                    <div className="flex flex-col gap-[4px]">
                      <div className="text-base font-medium">{item?.name}</div>
                      <div className="text-sm font-normal">{item?.address}</div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="text-sm font-normal text-[#EF3E27]">
                        {item?.distance}
                      </div>
                      <CheckOutlined className="text-[16px] text-green5" />
                    </div>
                  </div>
                )}
              />
            </Form.Item>
          </Form>
          <div className="px-[16px] pb-[24px]">
            <Button
              text={
                <div className="text-base font-medium text-white">Xác nhận</div>
              }
              className="w-full rounded-[32px] py-[14px]"
              style={{
                background:
                  "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
              }}
              onClick={() => navigate("/checkin")}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { CheckInSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
