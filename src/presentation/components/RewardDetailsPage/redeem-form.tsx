import React, { FC, useState } from "react";
import { Form } from "../common/form";
import { Rewards } from "./rewards";
import { ActivityUpload } from "./activity-upload";
import { UploadImage } from "../common/image-upload";
import { FormInstance, Input } from "antd";
import { CustomerInfo } from "./customer-info";
import ClearIcon from "../../static/icons/close-circle.png";

const RedeemForm: TRedeemForm = ({ form }) => {
  const [images, setImages] = useState<UploadImage[]>([]);
  const [images2, setImages2] = useState<UploadImage[]>([]);

  return (
    <Form form={form} className="flex flex-1 flex-col gap-[20px] px-[16px]">
      <CustomerInfo />
      <Form.Item label="Quà tặng" labelFontSize={16}>
        <Rewards />
      </Form.Item>
      <div className="flex flex-col gap-[12px]">
        <div className="text-base font-medium">Chụp ảnh</div>
        <Form.Item noStyle>
          <ActivityUpload
            title="Ảnh hoạt động 1"
            images={images}
            setImages={setImages}
          />
        </Form.Item>
        <Form.Item noStyle>
          <ActivityUpload
            title="Ảnh hoạt động 2"
            images={images2}
            setImages={setImages2}
          />
        </Form.Item>
      </div>
      <Form.Item label="Ghi chú" labelFontSize={16}>
        <Input.TextArea
          placeholder="Placeholder text here..."
          autoSize={{ minRows: 5, maxRows: 7 }}
          className="bg-white"
          style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
          allowClear={{
            clearIcon: <img src={ClearIcon} className="size-[20px]" />,
          }}
        />
      </Form.Item>
    </Form>
  );
};

export { RedeemForm };

type TRedeemForm = FC<{ form: FormInstance }>;
