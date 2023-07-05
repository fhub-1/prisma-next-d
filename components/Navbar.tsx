import { UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import { MainNav } from "./main-nav";

const NavbarPage = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>store switer</div>
        {/* main routers page */}
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
