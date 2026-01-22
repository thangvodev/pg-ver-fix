import React from "react";
import { Upload, UploadFile } from "antd";
import UploadFileIcon from "../../static/icons/upload-file.png";

const fileList: UploadFile[] = [
  {
    uid: "0",
    name: "xxx.png",
    status: "uploading",
    percent: 33,
  },
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "zzz.png",
    status: "error",
  },
];

const ImageUpload = () => {
  const customItemRender = (
    originNode: React.ReactElement,
    file: UploadFile,
    fileList: UploadFile[],
    actions: { download: () => void; preview: () => void; remove: () => void },
  ) => {
    return (
      <div
        className="relative flex max-h-full max-w-full flex-col"
        onClick={actions.preview}
      >
        {originNode}
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
      <div className="flex flex-col items-center gap-[12px] p-[24px]">
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
