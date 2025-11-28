import React from "react";
import useAddSkillController from "../controller/useAddSkillController";
import AddSkillView from "../view/AddSkillView";
import { useParams } from "react-router-dom";

const AddSkillContainer: React.FC = () => {
  const { id = null } = useParams<{ id?: string }>();
  const { watch, imageName, ...props } = useAddSkillController({ id });

  return (
    <AddSkillView
      {...props}
      isEdit={imageName ? true : false}
      images={imageName ?? (watch("image") as File[])}
    />
  );
};

export default AddSkillContainer;
