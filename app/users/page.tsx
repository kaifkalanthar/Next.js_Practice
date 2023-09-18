import { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  params: { id: string };
  searchParams: { sortOrder: string };
}

const page = async ({ params: { id }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>User Page {id}</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default page;
