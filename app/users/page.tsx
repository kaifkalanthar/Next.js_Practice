import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const page = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <div>
      <h1>User Page</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default page;
