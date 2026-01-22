import React from "react";
import { CheckOutForm } from "./checkout-form";
import { FloatSubmit } from "./float-submit";

const Content = () => {
  return (
    <div className="flex size-full flex-col">
      <CheckOutForm />
      <FloatSubmit />
    </div>
  );
};

export default Content;
