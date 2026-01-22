import React from "react";
import { CheckInForm } from "./checkin-form";
import { FloatSubmit } from "./float-submit";

const Content = () => {
  return (
    <div className="flex size-full flex-col">
      <CheckInForm />
      <FloatSubmit />
    </div>
  );
};

export default Content;
