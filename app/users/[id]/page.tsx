import React from "react";

interface Props {
  params: { id: number };
}

const page = ({ params: { id } }: Props) => {
  return (
    <div>
      UserDetailPage
      <h1>{id}</h1>
    </div>
  );
};

export default page;
