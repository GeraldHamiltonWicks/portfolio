import { ReactElement, useState } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import { ContactPage, HomePage, ProjectsPage, SkillsPage } from './pages';
import { Sidenav } from './components';
import './styles/main.scss';


export const App = (): ReactElement => {
    const [isToApplyBlur, setIsToApplyBlur] = useState(false);

    const toggleBlur = (): void => {
        setIsToApplyBlur(!isToApplyBlur);
    }

    return (
        <>
            <Sidenav toggleBlur={toggleBlur} />
            <Routes>
              <Route path="/" element={<HomePage isToApplyBlur={isToApplyBlur} />}></Route>
              <Route path="/projects" element={<ProjectsPage isToApplyBlur={isToApplyBlur} />}></Route>
              <Route path="/skills" element={<SkillsPage isToApplyBlur={isToApplyBlur} />}></Route>
              <Route path="/contact" element={<ContactPage isToApplyBlur={isToApplyBlur} />}></Route>
            </Routes>
        </>
    );
}