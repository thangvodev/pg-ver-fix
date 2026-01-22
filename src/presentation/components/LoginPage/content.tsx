import React from "react";
import { Title } from "./title";
import { Footer } from "./footer";

const Content = () => {
  return (
    <div className="flex size-full flex-col justify-between">
      <Title />
      <Footer />
    </div>
  );
};

export default Content;
