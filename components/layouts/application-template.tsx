import React, { ReactNode } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { ModalProvider } from "@/core/hooks/use-modal";

const ApplicationTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <ModalProvider>
      <Header />
      {children}
      <Footer />
    </ModalProvider>
  );
};

export default ApplicationTemplate;
