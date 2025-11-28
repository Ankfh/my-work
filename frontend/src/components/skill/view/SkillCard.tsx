import React, { useState } from "react";
import { SkillCardProps } from "../types/skillListTypes";
import { Edit, Delete, TrendingUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  imageBaseUrl,
  handleDeleteSkill,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const imgSrc = skill.image
    ? `${imageBaseUrl}/${skill.image}`
    : "https://via.placeholder.com/60x60/4A5568/FFFFFF?text=No+Image";

  const getProficiencyColor = () => {
    switch (skill.proficiency) {
      case "Beginner":
        return "from-blue-500 to-cyan-500";
      case "Intermediate":
        return "from-purple-500 to-pink-500";
      case "Advanced":
        return "from-orange-500 to-red-500";
      default:
        return "from-green-500 to-emerald-500";
    }
  };

  const getProficiencyWidth = () => {
    switch (skill.proficiency) {
      case "Beginner":
        return "25%";
      case "Intermediate":
        return "50%";
      case "Advanced":
        return "75%";
      default:
        return "100%";
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-xl rounded-full shadow-lg overflow-visible border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-purple-500/40 hover:shadow-xl hover:scale-[1.02] w-full"
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />

      <div className="relative flex items-center gap-2 md:gap-3 p-1.5 md:p-2">
        {/* Avatar-like circular skill icon */}
        <div className="relative flex-shrink-0">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${getProficiencyColor()} p-0.5 transition-all duration-700 ${
            isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
          }`}>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-md flex items-center justify-center overflow-hidden">
              <img
                src={imgSrc}
                className="w-6 h-6 md:w-7 md:h-7 object-contain transition-all duration-500"
                alt={skill.name}
              />
            </div>
          </div>
          
          {/* Proficiency indicator dot */}
          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-r ${getProficiencyColor()} border-2 border-purple-900 shadow-lg transition-all duration-500 ${
            isHovered ? "scale-125" : "scale-100"
          }`}>
            <div className="w-full h-full rounded-full animate-ping opacity-75 bg-gradient-to-r from-white/50 to-transparent" />
          </div>
        </div>

        {/* Skill info - horizontal layout */}
        <div className="flex-1 min-w-0 pr-16 md:pr-20">
          {/* Top row: Skill name and Proficiency badge */}
          <div className="flex items-start justify-between gap-2 mb-0.5">
            {/* Skill name */}
            <h3 className="text-xs md:text-sm font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-500 leading-tight flex-1">
              {skill.name}
            </h3>
            
            {/* Proficiency badge */}
            <div className="flex-shrink-0 px-1.5 md:px-2 py-0.5 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <div className="flex items-center gap-0.5">
                <TrendingUp sx={{ fontSize: 9 }} className="text-yellow-300" />
                <span className="text-[8px] md:text-[9px] font-semibold text-white whitespace-nowrap">{skill.proficiency}</span>
              </div>
            </div>
          </div>

          {/* Experience and proficiency bar */}
          <div className="flex items-center gap-2">
            {/* Experience */}
            {skill.yearsOfExperience != null && (
              <span className="flex-shrink-0 px-1.5 py-0.5 text-[8px] md:text-[9px] font-semibold rounded-md bg-gradient-to-r from-indigo-800/60 to-purple-800/60 text-indigo-100 border border-indigo-500/30 backdrop-blur-sm">
                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'yr' : 'yrs'}
              </span>
            )}
            
            {/* Mini proficiency bar */}
            <div className="flex-1 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 rounded-full h-1 md:h-1.5 shadow-inner border border-purple-500/20">
              <div
                className={`bg-gradient-to-r ${getProficiencyColor()} h-full rounded-full shadow-md transition-all duration-700 relative overflow-hidden`}
                style={{ width: getProficiencyWidth() }}
              >
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons - positioned absolutely */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          {/* Edit button */}
          <button
            onClick={() => navigate(`/add-skills/${skill._id}`)}
            className="group/btn bg-gradient-to-r from-purple-600/95 to-purple-700/95 hover:from-purple-500 hover:to-purple-600 backdrop-blur-md text-white p-1.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 border border-purple-400/40"
          >
            <Edit sx={{ fontSize: 11 }} className="group-hover/btn:rotate-12 transition-transform duration-300" />
          </button>

          {/* Delete button */}
          <button
            onClick={() => handleDeleteSkill(skill._id)}
            className="group/btn bg-gradient-to-r from-red-600/95 to-red-700/95 hover:from-red-500 hover:to-red-600 backdrop-blur-md text-white p-1.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 border border-red-400/40"
          >
            <Delete sx={{ fontSize: 11 }} className="group-hover/btn:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
