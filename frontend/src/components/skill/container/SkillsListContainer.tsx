import React from "react";
import useSkillsListController from "../controller/useSkillsListController";
import SkillsListView from "../view/SkillsListView";

const SkillsListContainer: React.FC = () => {
  const props = useSkillsListController();
  return <SkillsListView {...props} />;
};

export default SkillsListContainer;
