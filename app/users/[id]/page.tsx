import { notFound } from "next/navigation";
interface Props {
  params: { id: number };
}

const page = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return (
    <div>
      UserDetailPage
      <h1>{id}</h1>
    </div>
  );
};

export default page;
