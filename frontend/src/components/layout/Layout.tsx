import React, { ReactNode } from "react";

import styles from "@/styles/Layout.module.css";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer"

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
