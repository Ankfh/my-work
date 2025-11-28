import { useMemo } from "react";
import { useAuth } from "../../auth/context/AuthProvider";
import {
  useDeleteSkillMutation,
  useGetSkillsByUserQuery,
} from "../api/skillApi";
import { baseUrl } from "../../base/data/baseurl";
import { Skill } from "../types/skillListTypes";

const MEDIA_FOLDER = "skills";

const useSkillsListController = () => {
  const { userData } = useAuth();
  const userId = userData?.id || "";

  const { data, isLoading, isError, refetch, error } = useGetSkillsByUserQuery(
    { userId },
    { skip: !userId } // don't call until we know the user
  );
  const [
    deleteSkill,
    {
      // isLoading: deleteSkillLoading,
      // isError: deleteSkillIsError,
      // isSuccess: deleteSkillIsSuccess,
    },
  ] = useDeleteSkillMutation();

  const handleDeleteSkill = async (skillId: string) => {
    try {
      const result = await deleteSkill({ skillId }).unwrap();
      console.log("Skill deleted:", result);
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };
  const imageBaseUrl = `${baseUrl}/media/${MEDIA_FOLDER}`;

  const skills: Skill[] = useMemo(() => {
    return data?.data || [];
  }, [data]);

  const errorMessage =
    (error as any)?.data?.error ||
    (isError ? "Failed to load skills" : undefined);

  return {
    skills,
    loading: isLoading,
    error: errorMessage,
    onRefresh: refetch,
    imageBaseUrl,
    handleDeleteSkill,
  };
};

export default useSkillsListController;
