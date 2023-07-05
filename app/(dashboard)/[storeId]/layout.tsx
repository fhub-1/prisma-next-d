import NavbarPage from "@/components/Navbar";
import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashBoardlayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storedId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storedId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <NavbarPage />
      {children}
    </>
  );
}
