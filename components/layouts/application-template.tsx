import React, { ReactNode } from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const ApplicationTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ApplicationTemplate;
