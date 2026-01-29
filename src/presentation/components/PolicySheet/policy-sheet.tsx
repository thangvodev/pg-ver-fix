import { CloseCircleFilled } from "@ant-design/icons";
import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Policy } from "./policy";
import { Footer } from "./footer";
import { createUserRepository } from "../../../data/repositories/UserRepositoryImpl";
import { getPolicyUseCase } from "../../../core/usecases/GetPolicyUseCase";

const PolicySheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [policy, setPolicy] = useState();
  const userRepository = createUserRepository();
  const getPolicy = getPolicyUseCase(userRepository);

  useEffect(() => {
    async function initPolicy() {
      const data = await getPolicy();
      setPolicy(data.result);
    }

    initPolicy();
  }, []);

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
          <Policy policy={policy} />
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
