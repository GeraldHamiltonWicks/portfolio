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
    const [currentPage, setCurrentPage] = useState('home');

    const toggleBlur = (): void => {
        setIsToApplyBlur(!isToApplyBlur);
    }

    type Page = 'home' | 'projects' | 'skills' | 'contact';
    const setPage = (page: Page): void => {
      setCurrentPage(page);
    }

    return (
        <>
            <Sidenav toggleBlur={toggleBlur} setPage={setPage} currentPage={currentPage} />
            { currentPage === 'home' && <HomePage isToApplyBlur={isToApplyBlur} /> }
            { currentPage === 'projects' && <ProjectsPage isToApplyBlur={isToApplyBlur} /> }
            { currentPage === 'skills' && <SkillsPage isToApplyBlur={isToApplyBlur} /> }
            { currentPage === 'contact' && <ContactPage isToApplyBlur={isToApplyBlur} /> }
        </>
    );
}