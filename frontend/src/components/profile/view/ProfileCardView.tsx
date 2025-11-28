import React, { useState } from "react";
import { ProfileCardViewProps } from "../types/ProfileCardTypes";
import { baseUrl } from "../../base/data/baseurl";
import { useNavigate } from "react-router-dom";
import { Email, Phone, Edit, GitHub, LinkedIn, Work } from "@mui/icons-material";

const ProfileCardView: React.FC<ProfileCardViewProps> = ({ profile }) => {
  const navigate = useNavigate();
  const imageUrl = `${baseUrl}/media/profile/${profile.image}`;
  const [isHovered, setIsHovered] = useState(false);
  
  const onEdit = () => {
    console.log("clicked");
    navigate("/add-contacts");
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-500/30 hover:shadow-2xl max-w-md mx-auto"
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative p-5">
        {/* Edit Button - Modern floating style */}
        <button
          onClick={onEdit}
          className="absolute top-3 right-3 group/btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white p-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 z-10"
        >
          <Edit sx={{ fontSize: 18 }} />
        </button>

        {/* Profile Image Section */}
        <div className="relative mb-4 pt-2">
          <div className="relative w-24 h-24 mx-auto">
            <img
              src={imageUrl}
              alt={profile.name || "Profile image"}
              className={`w-full h-full rounded-full object-cover border-4 border-purple-400/40 shadow-xl transition-all duration-700 ${
                isHovered ? "scale-110 border-purple-300/60" : "scale-100"
              }`}
            />
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-indigo-600/30 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`} />
          </div>
          
          {/* Profession Badge */}
          {profile?.profession && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                {profile.profession}
              </span>
            </div>
          )}
        </div>

        {/* Name with gradient text */}
        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent text-center mb-3 group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-500">
          {profile?.name || "No name provided"}
        </h2>

        {/* Contact Information */}
        <div className="space-y-2 mb-4">
          {/* Email */}
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border border-purple-500/30 backdrop-blur-md hover:from-purple-700/50 hover:to-indigo-700/50 hover:border-purple-400/40 transition-all duration-300">
            <Email sx={{ fontSize: 16 }} className="text-purple-300" />
            {profile?.contacts?.email ? (
              <a
                href={`mailto:${profile.contacts.email}`}
                className="text-purple-100 hover:text-white transition-colors text-xs md:text-sm truncate"
              >
                {profile.contacts.email}
              </a>
            ) : (
              <span className="text-purple-200/60 italic text-xs">Not provided</span>
            )}
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-800/40 to-purple-800/40 border border-purple-500/30 backdrop-blur-md hover:from-indigo-700/50 hover:to-purple-700/50 hover:border-purple-400/40 transition-all duration-300">
            <Phone sx={{ fontSize: 16 }} className="text-purple-300" />
            {profile?.contacts?.phone ? (
              <a
                href={`tel:${profile.contacts.phone}`}
                className="text-purple-100 hover:text-white transition-colors text-xs md:text-sm"
              >
                {profile.contacts.phone}
              </a>
            ) : (
              <span className="text-purple-200/60 italic text-xs">Not provided</span>
            )}
          </div>
        </div>

        {/* Social Links */}
        {(profile?.socialLinks?.github ||
          profile?.socialLinks?.linkedin ||
          profile?.socialLinks?.upwork ||
          profile?.socialLinks?.fiver) && (
          <div className="pt-3 border-t border-purple-500/30">
            <p className="text-xs text-purple-200/80 text-center mb-2 font-medium">Connect with me</p>
            <div className="flex justify-center gap-2 flex-wrap">
              {profile?.socialLinks?.github && (
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social p-2 bg-gradient-to-br from-purple-700/50 to-indigo-700/50 hover:from-purple-600/70 hover:to-indigo-600/70 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                  aria-label="GitHub"
                >
                  <GitHub sx={{ fontSize: 18 }} className="text-purple-100 group-hover/social:text-white transition-colors" />
                </a>
              )}
              {profile?.socialLinks?.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social p-2 bg-gradient-to-br from-indigo-700/50 to-purple-700/50 hover:from-indigo-600/70 hover:to-purple-600/70 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
                  aria-label="LinkedIn"
                >
                  <LinkedIn sx={{ fontSize: 18 }} className="text-purple-100 group-hover/social:text-white transition-colors" />
                </a>
              )}
              {profile?.socialLinks?.upwork && (
                <a
                  href={profile.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social p-2 bg-gradient-to-br from-purple-700/50 to-indigo-700/50 hover:from-purple-600/70 hover:to-indigo-600/70 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                  aria-label="Upwork"
                >
                  <Work sx={{ fontSize: 18 }} className="text-purple-100 group-hover/social:text-white transition-colors" />
                </a>
              )}
              {profile?.socialLinks?.fiver && (
                <a
                  href={profile.socialLinks.fiver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social p-2 bg-gradient-to-br from-indigo-700/50 to-purple-700/50 hover:from-indigo-600/70 hover:to-purple-600/70 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
                  aria-label="Fiverr"
                >
                  <svg className="w-[18px] h-[18px] text-purple-100 group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="5" cy="5" r="3" />
                    <path d="M0 9h4v12H0zm6 0h4v12H6zm6 0h4v12h-4zm6-5v17h4V4z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        {/* No social links message */}
        {!profile?.socialLinks?.github &&
          !profile?.socialLinks?.linkedin &&
          !profile?.socialLinks?.upwork &&
          !profile?.socialLinks?.fiver && (
            <div className="pt-3 border-t border-purple-500/30 text-center">
              <span className="text-xs text-purple-200/60 italic">No social links provided</span>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProfileCardView;
