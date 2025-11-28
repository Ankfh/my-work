import HomeContainer from "../../Home/container/HomeContainer";
import NotFoundContianer from "../../Not-found/container/NotFoundContianer";
import AddLinksAndContactsContainer from "../../profile/container/AddLinksAndContactsContainer";
import AddProfileContainer from "../../profile/container/ProfileContianer";
import AddProjectContainer from "../../Project/container/AddProjectContainer";
import ProjectListVeiw from "../../Project/view/ProjectListVeiw";
import AddSkillContainer from "../../skill/container/AddSkillContainer";
import LoginContainer from "../../user/container/LoginContainer";
import SignUpContainer from "../../user/container/SignUpContainer";
import { AppRouteProps } from "../types/routesType";

const AllRoutes: AppRouteProps[] = [
  {
    path: "/login",
    element: LoginContainer,
    isProtected: false,
  },
  {
    path: "/",
    element: HomeContainer,
    isProtected: true,
  },
  {
    path: "/add-profile",
    element: AddProfileContainer,
    isProtected: true,
  },
  {
    path: "/add-skills/:id?",
    element: AddSkillContainer,
    isProtected: true,
  },
  {
    path: "/add-contacts",
    element: AddLinksAndContactsContainer,
    isProtected: true,
  },
  {
    path: "/project",
    element: AddProjectContainer,
    isProtected: true,
  },
  {
    path: "/project-list",
    element: ProjectListVeiw,
    isProtected: true,
  },
  {
    path: "/signup",
    element: SignUpContainer,
    isProtected: false,
  },
  //   {
  //     path: "/signup",
  //     element: SingUpContainer,
  //     isProtected: false,
  //   },
  {
    path: "*",
    element: NotFoundContianer,
    isProtected: false,
  },
];

export default AllRoutes;
