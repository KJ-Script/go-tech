import React from "react";
import AccountManagement from "../components/AccountManagement";
import AccountConfiguration from "../components/AccountConfiguration";

function DashboardAccount() {
  return (
    <div className="w-full h-full">
      <AccountManagement />
      <AccountConfiguration />
    </div>
  );
}

export default DashboardAccount;
