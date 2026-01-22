import React, { useState } from "react";
import { Form } from "../common/form";
import { RedeemForm } from "./redeem-form";
import { Banner } from "./banner";
import { FloatButton } from "./float-button";

const Content = () => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState<any>("not-delivered");

  return (
    <div className="flex size-full flex-col gap-[16px]">
      <Banner status={status} />
      <RedeemForm form={form} />
      <FloatButton status={status} />
    </div>
  );
};

export default Content;
