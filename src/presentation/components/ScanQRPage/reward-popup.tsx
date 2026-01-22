import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import PopupHead from "../../static/images/reward-popup-head.png";
import PopupHeadIcon from "../../static/icons/reward-popup-head-icon.png";
import CloseFilledIcon from "../icons/CloseFilledIcon";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import RewardImg from "../../static/images/reward.png";
import { Checkbox } from "../common/checkbox";

const data = [
  { img: RewardImg, title: "1 đĩa mì ý hải sản", value: "1" },
  { img: RewardImg, title: "1 đĩa mì ý hải sản", value: "2" },
  { img: RewardImg, title: "1 đĩa mì ý hải sản", value: "3" },
];

const RewardPopup: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [multiple, setMultiple] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
    navigate("/reward/1");
  };

  return (
    <>
      {createPortal(
        <Modal
          visible={isModalOpen}
          title={
            (
              <div
                className="absolute -top-[100px] right-0"
                onClick={handleCancel}
              >
                <CloseFilledIcon className="size-[24px] text-white" />
              </div>
            ) as unknown as string
          }
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{
            overflow: "visible",
            padding: "0",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <>
            <img
              src={PopupHead}
              className="absolute left-1/2 top-0 w-[261px] -translate-x-1/2 -translate-y-full"
            />
            <img
              src={PopupHeadIcon}
              className="absolute left-1/2 top-0 size-[51px] -translate-x-1/2 -translate-y-1/2"
            />
            <div className="flex flex-col items-center gap-[24px] px-[37px] py-[40px] font-manrope">
              <div className="flex flex-col items-center gap-[16px]">
                <div className="text-xl font-extrabold">
                  Chúc mừng bạn nhận được
                </div>
                <div className="rounded-[100px] bg-green1 px-[12px] py-[8px]">
                  <div className="text-green8 text-xs font-medium">
                    Vui lòng chọn 1 món quà.
                  </div>
                </div>
              </div>
              <Form form={form} className="w-full" onFinish={onFinish}>
                <Form.Item name="reward" noStyle>
                  <Radio.ButtonGroup
                    multiple={multiple}
                    items={data}
                    render={(item) => (
                      <div
                        className="flex items-center gap-[8px] rounded-[12px] bg-white p-[12px]"
                        style={{ boxShadow: " 0px 4px 18px 0px #5655552B" }}
                      >
                        {multiple ? <Checkbox color="#4CBA81" /> : <Radio />}
                        <div className="flex items-center gap-[8px]">
                          <img
                            src={item?.img}
                            alt=""
                            className="w-[54px] object-contain"
                          />
                          <div className="text-xs font-medium">
                            {item?.title}
                          </div>
                        </div>
                      </div>
                    )}
                    activeRender={(item) => (
                      <div
                        className="flex items-center gap-[8px] rounded-[12px] bg-white p-[12px]"
                        style={{ boxShadow: " 0px 4px 18px 0px #5655552B" }}
                      >
                        {multiple ? (
                          <Checkbox color="#4CBA81" checked />
                        ) : (
                          <Radio checked />
                        )}
                        <div className="flex items-center gap-[8px]">
                          <img
                            src={item?.img}
                            alt=""
                            className="w-[54px] object-contain"
                          />
                          <div className="text-xs font-medium">
                            {item?.title}
                          </div>
                        </div>
                      </div>
                    )}
                    className="flex gap-[12px]"
                    direction="column"
                  />
                </Form.Item>
              </Form>
              <Button
                text={
                  <div className="text-base font-medium text-white">
                    Xác nhận
                  </div>
                }
                className="h-[47px] w-full rounded-[32px] px-[10px] py-[14px]"
                style={{
                  background:
                    "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
                }}
                onClick={form.submit}
              />
            </div>
          </>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { RewardPopup };

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
};
