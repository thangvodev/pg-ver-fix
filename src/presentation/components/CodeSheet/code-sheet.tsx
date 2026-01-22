import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Banner } from "./banner";
import { CodeForm } from "./code-form";
import { CloseOutlined } from "@ant-design/icons";

const CodeSheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative">
                <div
                  className="absolute right-[16px] top-[16px] flex items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="text-[20px] text-gray6" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFFFFF",
            overflow: "visible",
          }}
          className="font-manrope"
        >
          <div className="flex size-full flex-col justify-center gap-[24px]">
            <Banner />
            <CodeForm />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { CodeSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
