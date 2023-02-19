import { ReactElement, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContactPage, HomePage, ProjectsPage, SkillsPage } from './pages';
import { Sidenav } from './components';
import './styles/main.scss';


export const App = (): ReactElement => {
    const [isToApplyBlur, setIsToApplyBlur] = useState(false);

    const toggleBlur = (): void => {
        setIsToApplyBlur(!isToApplyBlur);
    }

    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage isToApplyBlur={isToApplyBlur} />,
        },
        {
          path: "/projects",
          element: <ProjectsPage isToApplyBlur={isToApplyBlur} />,
        },
        {
          path: "/skills",
          element: <SkillsPage isToApplyBlur={isToApplyBlur} />,
        },
        {
          path: "/contact",
          element: <ContactPage isToApplyBlur={isToApplyBlur} />,
        },
      ]);

    return (
        <>
            <Sidenav toggleBlur={toggleBlur} />
            <RouterProvider router={router} />
        </>
    );
}