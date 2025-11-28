import React from "react";
import AddProjectView from "../view/AddProjectView";
import useAddProjectController from "../hooks/useAddProjectController";

const AddProjectContainer: React.FC = () => {
  const { imageName, watch, ...controller } = useAddProjectController();
  return (
    <AddProjectView
      {...controller}
      isEdit={imageName ? true : false}
      images={imageName ?? watch("image")}
    />
  );
};

export default AddProjectContainer;
