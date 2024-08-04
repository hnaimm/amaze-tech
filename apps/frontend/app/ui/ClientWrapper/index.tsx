"use client";
import { ToastContainer } from "react-toastify";
import "../../globals.css";
import "../../page.module.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default ClientWrapper;
