import React from "react";
import { useGetAllProjectsQuery } from "../services/projectApi";
import ProjectCard from "./ProjectCard";
import { ProjectApiResponse } from "../types/project.types";

const ProjectListView = () => {
  const {
    data: projects,
    isLoading: getAllProjectLaoding,
    isError,
  } = useGetAllProjectsQuery();

  if (getAllProjectLaoding)
    return <p className="text-center py-10 text-gray-500">Loading...</p>;

  if (isError)
    return (
      <p className="text-center py-10 text-red-500">Failed to load projects.</p>
    );

  if (!projects?.data?.length)
    return (
      <p className="text-center py-10 text-gray-400">No projects found.</p>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects?.data?.map((project: any) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectListView;
