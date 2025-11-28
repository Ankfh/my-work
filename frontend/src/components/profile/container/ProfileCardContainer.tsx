import React from "react";
import useProfileCardController from "../controller/useProfileCardController";
import ProfileCardView from "../view/ProfileCardView";

const ProfileCardContainer: React.FC = () => {
  const { profile, isLoading, isError } = useProfileCardController();
  console.log(profile, "profile");
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError || !profile)
    return <p className="text-center text-red-500">Failed to load profile.</p>;

  return <ProfileCardView profile={profile?.data} />;
};

export default ProfileCardContainer;
