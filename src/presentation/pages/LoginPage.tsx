import React from "react";
import { Header, Page } from "zmp-ui";
import { LoginPageContent } from "../components/LoginPage";
import LoginBg from "../static/images/login-bg.jpg";

const LoginPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white pt-0">
      <Header className="topbar no-border h-auto flex-none" />
      <img src={LoginBg} alt="" className="absolute size-full object-cover" />
      <div className="z-10 flex-1 overflow-auto">
        <LoginPageContent />
      </div>
    </Page>
  );
};

export default LoginPage;
