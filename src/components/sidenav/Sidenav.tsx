import { ReactElement, useState } from "react";
import { Icon } from "../icons/Icon";
import LogoImage from '../../assets/images/logo.png';
import { navigateTo } from "../../helpers";

interface SidenavProps {
    toggleBlur: () => void
}

export const Sidenav = (props: SidenavProps): ReactElement => {
    // isToShowSidenav is only for small screens
    const [isToShowSideNav, setIsToShowSidenav] = useState(false);

    const toggleSidenav = (): void => { 
        setIsToShowSidenav(!isToShowSideNav);
        props.toggleBlur();
    }
    
    const getLinkClass = (currentLink: string): string => {
        const pathname = window.location.pathname;
        const isCurrentLinkActive = currentLink === pathname;
        
        return isCurrentLinkActive ? 'link-container-active' : '';
    }

    return (
        <div id="sidenav">
            <div className="sidebar-mobile">
                <button onClick={toggleSidenav}>
                <Icon iconSelector="hamburger" />
                </button>
                
            </div>
            <div className={`sidenav-desktop ${isToShowSideNav ? 'sidenav-visible': ''}`}>
            <div className="header-container">
                <img src={LogoImage} alt="logo" />
                <h4>Portfolio | Gerald Wicks</h4>
            </div>
            <hr/>
            <a href="/" className={`link-container ${getLinkClass('/')}`}>
                <Icon iconSelector="home" />
                <h5>Home</h5>
            </a>
            <a href="/projects" className={`link-container ${getLinkClass('/projects')}`}>
                <Icon iconSelector="projects" />
                <h5>Projects</h5>
            </a>
            <a href="/skills" className={`link-container ${getLinkClass('/skills')}`}>
               <Icon iconSelector="skills" />
               <h5>Skills</h5>
            </a>
            <a href="/contact" className={`link-container ${getLinkClass('/contact')}`}>
                <Icon iconSelector="contact" />
                <h5>Contact</h5>
            </a>
            <div className="link-bottom-container">
                <Icon iconSelector="message" />
                <h6>Have any questions ?</h6>
                <p>Please check our contact page</p>
                <button onClick={() => navigateTo('/contact#card-message')}>message</button>
            </div>
            </div>
        </div>
    );
}