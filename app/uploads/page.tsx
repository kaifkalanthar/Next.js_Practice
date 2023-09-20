"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryImage {
  public_id: string;
}
const page = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={300} height={300} alt="Images" />
      )}
      <CldUploadWidget
        uploadPreset="mtzpnocl"
        onUpload={(result, widget) => {
          if (!result.info) return;
          const info = result.info as CloudinaryImage;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default page;
