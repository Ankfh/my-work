import React, { useState } from "react";
import { Project } from "../types/project.types";
import { Launch, Download, Code, Visibility, Star } from "@mui/icons-material";
import { baseUrl } from "../../base/data/baseurl";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const imageUrl = `${baseUrl}/media/project/${project.image}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-500/30 hover:shadow-2xl"
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-4">
        {/* Project Image with enhanced effects */}
        <div className="relative overflow-hidden rounded-xl mb-3 shadow-xl">
          <img
            src={imageUrl}
            alt={project.name}
            className={`w-full h-40 md:h-48 object-cover transition-all duration-700 ${
              isHovered ? "scale-110 brightness-110" : "scale-100"
            }`}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          
          {/* Floating badge */}
          <div className="absolute top-2 right-2 px-2.5 py-1 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
            <div className="flex items-center gap-1">
              <Star sx={{ fontSize: 12 }} className="text-yellow-300" />
              <span className="text-xs font-semibold text-white">Featured</span>
            </div>
          </div>
        </div>

        {/* Project Name with gradient text */}
        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent mb-2 line-clamp-1 group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-500">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-purple-100/90 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-purple-50 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech Stack with enhanced styling */}
        {project.tech && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.map((tag, index) => (
              <span
                key={tag}
                style={{ animationDelay: `${index * 50}ms` }}
                className="group/tag flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-gradient-to-r from-purple-800/60 to-indigo-800/60 text-purple-50 border border-purple-500/40 backdrop-blur-md hover:from-purple-700/80 hover:to-indigo-700/80 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-default"
              >
                <Code sx={{ fontSize: 12 }} className="group-hover/tag:rotate-12 transition-transform duration-300" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links with modern buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-purple-500/30">
          {project.visitLink && (
            <a
              href={project.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:via-purple-400 hover:to-indigo-500 text-white rounded-lg text-xs font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.03] flex-1 justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <Launch sx={{ fontSize: 16 }} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>Live Demo</span>
            </a>
          )}

          {project.downloadLink && (
            <a
              href={project.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:via-indigo-400 hover:to-purple-500 text-white rounded-lg text-xs font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.03] flex-1 justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <Download sx={{ fontSize: 16 }} className="group-hover/btn:translate-y-1 transition-transform duration-300" />
              <span>Download</span>
            </a>
          )}

          {!project.visitLink && !project.downloadLink && (
            <div className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 text-purple-200 rounded-lg text-xs font-medium backdrop-blur-md border border-purple-500/30 flex-1 justify-center">
              <Visibility sx={{ fontSize: 16 }} />
              <span>View Details</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
