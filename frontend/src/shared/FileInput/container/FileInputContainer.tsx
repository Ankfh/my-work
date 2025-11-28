import React, { useRef } from "react";
import FileInputView from "../view/FileInputView";
import { SetBackendValidation } from "../services/ManulValidation";
import { FileInputProps } from "../types/FileInputTypes";

const FileInputContainer: React.FC<FileInputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onFramClick = () => {
    inputRef.current?.click();
    console.log(inputRef, "heloooo");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    if (fileList.length <= 0) {
      return SetBackendValidation(
        props.setError,
        props.name,
        props.errorMessage || ""
      );
    }

    const checkType = fileList.every((file) => file.type.startsWith("image/"));
    if (!checkType) {
      return SetBackendValidation(
        props.setError,
        props.name,
        props.errorMessage || ""
      );
    }

    props.setValue(props.name, fileList);
    props.clearErrors(props.name);
    console.log(fileList);
  };

  return (
    <FileInputView
      {...props}
      onChangeInput={props.onChange || handleChange}
      inputRef={inputRef}
      onFramClick={onFramClick}
    />
  );
};

export default FileInputContainer;
