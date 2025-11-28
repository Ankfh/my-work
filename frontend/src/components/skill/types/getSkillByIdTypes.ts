export type GetSkillByIdArgs = {
  id: string;
};

// More flexible: data can be anything (object with unknown shape)
export type GetSkillByIdResponse = {
  success: boolean;
  data: Record<string, any>;
};
