import React from "react";
import { Upload, UploadFile } from "antd";
import UploadFileIcon from "../../static/icons/upload-file.png";
import CloseIcon from "../icons/CloseIcon";
import { Button } from "../common/button";
import DotIcon from "../icons/DotIcon";

const fileList: UploadFile[] = [
  {
    uid: "-1",
    name: "image01.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];

const ImageUpload = () => {
  const customItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: { download: () => void; preview: () => void; remove: () => void },
  ) => {
    const fileKey = file.uid || file.name || "";
    const imageUrl = fileList[fileKey] || file.url || file.preview || "";

    return (
      <div
        className="mt-[12px] flex justify-between rounded-[8px] border border-gray2 bg-white p-[12px]"
        onClick={() => actions.preview()}
      >
        <div className="flex flex-1 items-center gap-[12px]">
          <img src={imageUrl} alt="" className="size-[28px]" />
          <div className="flex w-full flex-col gap-[4px]">
            <div className="line-clamp-1 w-[calc(100%-20px)] break-all text-sm font-medium">
              {file.name}
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="text-xs font-normal text-gray6">
                {file.size ? (file.size / 1024).toFixed(1) : 0}MB
              </div>
              <DotIcon className="size-[5px] text-gray6" />
              <div className="text-xs font-normal text-gray6">
                {file.percent ? file.percent : 0}%
              </div>
            </div>
          </div>
        </div>
        <Button.Icon
          icon={<CloseIcon className="text-gray6" />}
          className="size-[20px]"
          onClick={() => actions.remove()}
        />
      </div>
    );
  };

  return (
    <Upload.Dragger
      maxCount={1}
      listType="picture"
      defaultFileList={fileList}
      itemRender={customItemRender}
    >
      <div className="flex flex-col items-center gap-[12px] px-[24px] py-[12px]">
        <img
          src={UploadFileIcon}
          alt=""
          className="size-[48px] object-contain"
        />
        <div className="flex flex-col gap-[8px]">
          <div className="text-base font-medium text-greenMinimap">
            Tải ảnh checkin
          </div>
          <div className="text-xs font-normal text-gray7">
            Chụp hoặc tải ảnh lên (Tối đa 25MB)
          </div>
        </div>
      </div>
    </Upload.Dragger>
  );
};

export { ImageUpload };
