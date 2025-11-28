import { useAuth } from "../../auth/context/AuthProvider";
import { useGetProfileQuery } from "../api/profileApi";
import { UseProfileCardControllerResult } from "../types/ProfileCardTypes";

const useProfileCardController = (): UseProfileCardControllerResult => {
  const { userData } = useAuth();

  const {
    data: profile,
    isLoading,
    isError,
  } = useGetProfileQuery(
    { userId: userData?.id || "" },
    { skip: !userData?.id }
  );
  console.log(profile , 'profile====')

  return { profile, isLoading, isError };
};

export default useProfileCardController;
