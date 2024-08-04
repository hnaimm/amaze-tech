"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "../../app/globals.css";
import "../../app/page.module.css";
import "./style.css";

const VerifyPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      toast.success("Account Verified Successfully!");
      router.push(`/wishlist`);
    }, 2000);
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
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

export default VerifyPage;
