import React, { FC } from "react";
import { Title } from "./title";
import { Footer } from "./footer";
import { User } from "../../../core/entities/User";

const Content: TContent = ({ user }) => {
  return (
    <div className="flex size-full flex-col justify-between">
      <Title />
      <Footer user={user} />
    </div>
  );
};

export default Content;

type TContent = FC<{
  user?: User;
}>;
