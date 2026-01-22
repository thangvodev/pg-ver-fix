import React from "react";
import CodeLock from "../../static/images/code-lock.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center gap-[12px]">
      <img src={CodeLock} alt="" className="size-[100px]" />
      <div className="text-xl font-semibold">Nhập mã bảo mật</div>
      <div className="text-base font-normal text-gray6">
        Vui lòng nhập mã bảo mật để truy cập ứng dụng
      </div>
    </div>
  );
};

export { Banner };
