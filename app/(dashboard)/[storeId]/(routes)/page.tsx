import prismadb from "@/lib/db";

interface DashBoardPageProps {
  params: { storeId: string };
}

const DashBoardPage: React.FC<DashBoardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active store: {store?.name}</div>;
};

export default DashBoardPage;
