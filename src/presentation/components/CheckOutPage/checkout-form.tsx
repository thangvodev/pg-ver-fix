import React from "react";
import { Form } from "../common/form";
import { ImageUpload } from "./image-upload";
import { LocationPicker } from "./location-picker";
import { DatePickerZUI } from "../common/date-picker";
import { ClockCircleFilled } from "@ant-design/icons";

const CheckOutForm = () => {
  return (
    <Form className="flex flex-1 flex-col gap-[16px] px-[16px]">
      <Form.Item
        name="location"
        label="Hình ảnh check-out"
        labelFontSize={18}
        labelCol={{ className: "!p-0" }}
      >
        <ImageUpload />
      </Form.Item>
      <div className="flex flex-col gap-[24px]">
        <Form.Item
          name="location"
          label="Vị trí check-out"
          labelFontSize={18}
          labelCol={{ className: "!p-0" }}
        >
          <LocationPicker />
        </Form.Item>
        <Form.Item
          name="time"
          label="Thời gian check-out"
          labelFontSize={18}
          labelCol={{ className: "!p-0" }}
        >
          {/* <DatePickerZUI
            hourFormat="24h"
            prefix={
              <ClockCircleFilled className="pl-[12px] text-[22px] text-gray4" />
            }
            action={{
              close: true,
              text: "Xác nhận",
            }}
            inputClass="!text-sm !border-gray2 !m-0 !h-[48px]"
            placeholder="Chọn ngày giờ"
            formatPickedValueDisplay={(value) => {
              return value.format("H:mm[, ]DD/MM/YYYY");
            }}
            pickType="both"
          /> */}
          <div className="bg-[#FFFFFF] border-gray2 border rounded-[8px] p-3 flex items-center">
            <ClockCircleFilled className="text-[22px] text-gray4" />
            <span className="ml-2 text-sm text-[#101010]">09:32, 12/01/2026</span>
          </div>
        </Form.Item>
      </div>
    </Form>
  );
};

export { CheckOutForm };
