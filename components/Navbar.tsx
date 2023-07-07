import { UserButton, auth } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";
import prismadb from "@/lib/db";
import { redirect } from "next/navigation";

const NavbarPage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} /> 
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
