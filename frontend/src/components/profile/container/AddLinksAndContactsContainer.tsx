import React from "react";
import useAddLinksAndContactsController from "../controller/useAddLinksAndContactsController";
import AddLinksAndContactsView from "../view/AddLinksAndContactsView";

const AddLinksAndContactsContainer: React.FC = () => {
  const props = useAddLinksAndContactsController();

  return <AddLinksAndContactsView {...props} />;
};

export default AddLinksAndContactsContainer;
