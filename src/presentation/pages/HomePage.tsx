import React from "react";
import { Header, Page } from "zmp-ui";
import { HomePageContent } from "../components/HomePage";
import Logo from "../static/images/logo2.png";

const HomePage = () => {
  return (
    <Page
      className="page-content relative flex flex-1 flex-col"
      style={{
        background:
          "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
      }}
    >
      <Header
        title={
          (
            <div className="justify-left flex w-[calc(100%-80px)]">
              <img src={Logo} alt="" className="h-[14.77px]" />
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none"
        showBackIcon={false}
        style={{
          background:
            "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
        }}
      />
      <div className="relative z-10 flex-1 overflow-auto bg-white">
        <div
          className="absolute top-0 h-[20px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
          }}
        />
        <HomePageContent />
      </div>
    </Page>
  );
};

export default HomePage;
