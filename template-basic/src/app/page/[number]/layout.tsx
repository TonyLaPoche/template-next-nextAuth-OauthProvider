// import ProgressSpinner from "@/components/utils/progressSpinner";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>CONTENT TITLE</h1>
      {children}
    </div>
  );
}

export default Layout;
