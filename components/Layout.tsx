import React from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.main_layout}>{children}</div>;
};

export default Layout;
