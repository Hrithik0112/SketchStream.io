"use client";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function Dashboard() {
  return (
    <>
      <div>dashboard</div>
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </>
  );
}

export default Dashboard;
