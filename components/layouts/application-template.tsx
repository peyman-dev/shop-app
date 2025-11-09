"use client";
import React, { ReactNode } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { ModalProvider } from "@/core/hooks/use-modal";
import { usePathname } from "next/navigation";
import LAYOUT_EXCLUDED_ROUTES from "@/core/features/layout-excluded-routes";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
const ApplicationTemplate = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const shouldHideLayout = LAYOUT_EXCLUDED_ROUTES.some((route) =>
    path.includes(route)
  );

  return (
    <MantineProvider>
      <ModalProvider>
        {shouldHideLayout ? (
          children
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </ModalProvider>
    </MantineProvider>
  );
};

export default ApplicationTemplate;
