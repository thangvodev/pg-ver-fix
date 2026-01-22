import React, { FC, useState } from "react";
import { ImageUpload, UploadImage } from "../common/image-upload";
import ImagesIcon from "../icons/ImagesIcon";

const ActivityUpload: TActivityUpload = ({
  images,
  setImages,
  title,
  maxCount = 1,
}) => {
  return (
    <div className="relative flex gap-[20px] rounded-[8px] border border-dashed border-secondary3 bg-white p-[12px]">
      <ImageUpload
        images={images}
        setImages={setImages}
        maxCount={maxCount}
        listType="picture-card"
        className={"customSizedUpload uploadFill absolute inset-0"}
        uploadButton={
          <div className="flex items-center p-[12px]">
            <ImagesIcon className="size-[40px] text-[#E5EEF7]" />
          </div>
        }
      />
      <div className="flex flex-col gap-[6px] pl-[60px]">
        <div className="text-xs font-medium">{title}</div>
        <div className="text-neutral300 text-xs font-normal">
          Bắt buộc tải lên{" "}
          <span className="text-[#E64F00]">{maxCount} ảnh</span>
        </div>
      </div>
    </div>
  );
};

export { ActivityUpload };

type TActivityUpload = FC<{
  title: string;
  images: UploadImage[];
  setImages: React.Dispatch<React.SetStateAction<UploadImage[]>>;
  maxCount?: number;
}>;
