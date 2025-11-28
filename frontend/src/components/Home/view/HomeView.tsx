import React from "react";
import AssistantContainer from "../../assistant/container/AssistantContainer";
import AddProfileContainer from "../../profile/container/ProfileContianer";
import ProfileCardContainer from "../../profile/container/ProfileCardContainer";
import AddSkillContainer from "../../skill/container/AddSkillContainer";
import SkillsListContainer from "../../skill/container/SkillsListContainer";
import ProjectListVeiw from "../../Project/view/ProjectListVeiw";

const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 p-6">
      {/* Main Content Grid */}
      <div className="flex flex-col">
        {/* Top Left - Profile Card */}
        <div className="md:col-span-1">
          <div className="sticky top-6">
            <ProfileCardContainer />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Assistant Section */}
          {/* <div className="bg-indigo-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <AssistantContainer />
          </div> */}
          <SkillsListContainer/>
           <ProjectListVeiw/>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
