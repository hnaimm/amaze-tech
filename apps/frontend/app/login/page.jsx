"use client";
import * as Tabs from "@radix-ui/react-tabs";
import LoginForm from "./../components/LoginPage/LoginForm";
import RegisterForm from "./../components/LoginPage/RegisterForm";
import "../../app/globals.css";
import "../../app/page.module.css";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="page-wrapper w-[100vw] h-[100vh] flex justify-center items-center">
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Login">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Password
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <LoginForm />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <RegisterForm />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default LoginPage;
