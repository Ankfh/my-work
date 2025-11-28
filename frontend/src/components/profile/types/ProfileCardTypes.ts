import { GetProfileResponse, ProfileData } from "./AddProfileApiTypes";

export interface UseProfileCardControllerResult {
  profile?: GetProfileResponse;
  isLoading: boolean;
  isError: boolean;
}

export interface ProfileCardViewProps {
  profile: ProfileData;
}
