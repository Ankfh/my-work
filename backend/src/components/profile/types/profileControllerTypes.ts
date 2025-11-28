export interface AddProfileRequestBody {
    name: string;
    profession: string;
    userId: string;
    github?: string;
    linkedin?: string;
    upwork?: string;
    fiver?: string;
    email?: string;
    phone?: string;
  }
  

  export interface GetProfileRequestParams {
    userId: string;
  }
  

  export interface AddContactAndSocialRequestBody {
    userId: string;
    name?: string;
    profession?: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
      upwork?: string;
      fiver?: string;
    };
    contacts?: {
      email?: string;
      phone?: string;
    };
  }