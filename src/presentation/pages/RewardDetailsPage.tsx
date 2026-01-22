import React from "react";
import { Header, Page } from "zmp-ui";
import { RewardDetailsPageContent } from "../components/RewardDetailsPage";

const RewardDetailsPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="justify-left flex w-[calc(100%-80px)]">
              <div className="text-base font-medium">Chi tiết quà tặng</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-surface"
      />
      <div className="z-10 flex-1 overflow-auto bg-surface">
        <RewardDetailsPageContent />
      </div>
    </Page>
  );
};

export default RewardDetailsPage;
