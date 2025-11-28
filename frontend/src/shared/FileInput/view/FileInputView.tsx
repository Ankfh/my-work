import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import { FileInputUIProps } from "../types/FileInputTypes";
import { baseUrl } from "../../../components/base/data/baseurl";

const FileInputView: React.FC<FileInputUIProps> = (props) => {
  const onRemoveImage = props.onRemoveImage || (() => {});

  // 👇 Narrow the type
  const image =
    props.isEdit && typeof props.images === "string"
      ? props.images
      : Array.isArray(props.images) && props.images.length > 0
      ? props.images[0]
      : null;

  const imageUrl =
    props.isEdit && typeof image === "string"
      ? `${baseUrl}/media/skills/${image}`
      : image instanceof File
      ? URL.createObjectURL(image)
      : "";

  return (
    <div>
      <input
        className="hidden"
        ref={props.inputRef}
        type="file"
        accept={props.accepted}
        onChange={props.onChangeInput}
      />

      <div className="relative shadow-md shadow-gray-400">
        {image ? (
          <div className="flex justify-center relative">
            <img
              className="object-cover w-[22rem] h-[13rem] rounded-sm"
              src={imageUrl}
              alt="Uploaded Preview"
            />
            <button
              type="button"
              onClick={onRemoveImage}
              className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-red-100 transition"
            >
              <CloseIcon style={{ fontSize: 20, color: "red" }} />
            </button>
          </div>
        ) : (
          <div
            className="cursor-pointer flex justify-center items-center h-44"
            onClick={props.onFramClick}
          >
            <AddToPhotosIcon sx={{ color: "blue", fontSize: 90 }} />
          </div>
        )}
      </div>

      <p className="text-red-600 text-[10px] font-[800]">
        {props.errors[props.name]?.message as string}
      </p>
    </div>
  );
};

export default FileInputView;
