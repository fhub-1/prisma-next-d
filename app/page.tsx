import { Button } from "@/components/ui/button";
import Image from "next/image";
import DemoPage from "./payments/page";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <>
      <div className="p-8">
        <ModeToggle />
      </div>

      <DemoPage />
    </>
  );
}
