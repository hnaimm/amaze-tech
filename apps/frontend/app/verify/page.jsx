"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import * as Tabs from "@radix-ui/react-tabs";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import "../../app/globals.css";
import "../../app/page.module.css";
import "./style.css";

const VerifyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const verificationCode = searchParams.get("code");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (verificationCode && !loading) {
      setLoading(true);
      setTimeout(() => {
        handleVerify(verificationCode);
      }, 1000);
    }
  }, [verificationCode]);

  const handleVerify = (verificationCode) => {
    axios
      .post("http://localhost:8000/verification/verify-email", {
        code: verificationCode,
      })
      .then(function (response) {
        if (response.status == 201) {
          const { access_token, user } = response.data;

          localStorage.setItem("access_token", access_token);
          localStorage.setItem("user", JSON.stringify(user));

          toast.success("Account verified Successfully!");
          router.push(`/wishlist`);
        }
      })
      .catch(function (error) {
        if (error?.message) {
          toast.error(error?.message);
        }
        setLoading(false);
      });
  };

  return (
    <div className="page-wrapper w-[100vw] h-[100vh] flex justify-center items-center">
      <Tabs.Root className="TabsRoot" defaultValue="verify">
        <Tabs.List className="TabsList" aria-label="Login">
          <Tabs.Trigger className="TabsTrigger" value="verify">
            Verify Email
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="verify">
          {loading ? (
            <VerifyLoading />
          ) : (
            <p className="min-h-48 flex flex-col justify-center items-center">
              <EnvelopeClosedIcon
                width="60"
                height="60"
                color="#c2bdd8"
                className="mb-4"
              />
              Check your inbox to verify your email address
            </p>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default VerifyPage;

const VerifyLoading = () => {
  return (
    <div className="min-h-48 flex justify-center items-center">
      <div className="loading-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      Verifying Your Account...
    </div>
  );
};
