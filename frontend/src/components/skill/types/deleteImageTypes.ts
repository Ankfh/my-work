export interface DeleteImageArgs {
  type: string; // e.g. "skills"
  imageName: string; // file name
  id?: string; // required if type = "skills"
}

export interface DeleteImageResponse {
  success: boolean;
  message: string;
  imageName?: string;
}
