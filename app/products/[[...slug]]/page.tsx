import React from "react";

interface Props {
  params: { slug: string[] };
}

const page = ({ params: { slug } }: Props) => {
  return <div>ProductPage{slug}</div>;
};

export default page;
