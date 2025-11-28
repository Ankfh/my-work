export interface CreateProjectParams {
  userId: string;
  name: string;
  image: string;
  description: string;
  visitLink?: string;
  downloadLink?: string;
  tech?: string[];
}

export interface UpdateProjectParams extends Partial<CreateProjectParams> {}
