"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <>
      <h1>hello from root</h1>
      <div>
        <Modal
          isOpen={true}
          onClose={() => {}}
          title="test"
          description="hello from my test"
        >
          children
        </Modal>
      </div>
      <ModeToggle />
    </>
  );
}
