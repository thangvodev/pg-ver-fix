import { CloseCircleFilled } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Policy } from "./policy";
import { Footer } from "./footer";

const PolicySheet: FC<Props> = ({ children }) => {
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
                  className="absolute -top-[50px] right-[5px] flex items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseCircleFilled className="rounded-full bg-black text-[24px] text-white" />
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
          height={"65vh"}
          style={{
            background: "#2CBC74",
            overflow: "visible",
          }}
          className="flex flex-col"
        >
          <Policy />
          <Footer />
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { PolicySheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
