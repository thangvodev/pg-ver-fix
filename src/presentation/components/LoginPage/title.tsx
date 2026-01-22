import React from "react";
import Logo from "../../static/images/logo.png";
import PG from "../../static/images/pg.png";

const Title = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] pt-[40px]">
      <img src={Logo} alt="" className="h-[80px] object-contain" />
      <img src={PG} alt="" className="h-[39px] object-contain" />
    </div>
  );
};

export { Title };
