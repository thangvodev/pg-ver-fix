import React from "react";
import { Header, Page } from "zmp-ui";
import { CheckInPageContent } from "../components/CheckInPage";

const CheckInPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="justify-left flex w-[calc(100%-80px)]">
              <div className="text-base font-medium text-[#101010]">Chụp ảnh checkin</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-surface"
      />
      <div className="z-10 flex-1 overflow-auto bg-surface">
        <CheckInPageContent />
      </div>
    </Page>
  );
};

export default CheckInPage;
