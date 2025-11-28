export interface Project {
    _id: string;
    userId: string;
    name: string;
    image: string;
    description: string;
    visitLink?: string;
    downloadLink?: string;
    tech?: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ProjectApiResponse {
    success: boolean;
    data: Project[];
  }
  