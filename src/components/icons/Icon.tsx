import { ReactElement } from "react";
import { AngularIcon } from "./AngularIcon";
import { ContactIcon } from "./ContactIcon";
import { CssIcon } from "./CssIcon";
import { EyeIcon } from "./EyeIcon";
import { FacebookIcon } from "./FacebookIcon";
import { GithubIcon } from "./GithubIcon";
import { HamburgerIcon } from "./HamburgerIcon";
import { HomeIcon } from "./HomeIcon";
import { HtmlIcon } from "./HtmlIcon";
import { JavaScriptIcon } from "./JavaScriptIcon";
import { LinkedinIcon } from "./Linkedin_Icon";
import { LogoutIcon } from "./LogoutIcon";
import { MessageIcon } from "./MessageIcon";
import { NodeIcon } from "./NodeIcon";
import { PhoneIcon } from "./PhoneIcon";
import { ProjectsIcon } from "./ProjectsIcon";
import { ReactIcon } from "./ReactIcon";
import { SaasIcon } from "./SaasIcon";
import { SkillsIcon } from "./SkillsIcon";
import { ThemeIcon } from "./ThemeIcon";
import { TypeScriptIcon } from "./TypeScriptIcon";

export type IconSelector = 
'facebook' |
'github' |
'logout' |
'phone' | 
'theme' |
'eye' |
'linkedin' |
'home' |
'projects' |
'skills' |
'contact' |
'message' |
'angular' |
'saas' |
'typescript' |
'node' |
'react' |
'html' |
'css' |
'javascript'|
'hamburger'
;

interface IconProps {
    iconSelector: IconSelector
}

export const Icon = (props: IconProps): ReactElement => {
    return (
    <>
    { props.iconSelector === 'facebook' && <FacebookIcon /> }
    { props.iconSelector === 'github' && <GithubIcon />}
    { props.iconSelector === 'linkedin' && <LinkedinIcon /> }
    { props.iconSelector === 'logout' && <LogoutIcon />}
    { props.iconSelector === 'phone' && <PhoneIcon />}
    { props.iconSelector === 'theme' && <ThemeIcon />}   
    { props.iconSelector === 'eye' && <EyeIcon /> }  
    { props.iconSelector === 'home' && <HomeIcon /> }
    { props.iconSelector === 'skills' && <SkillsIcon /> }
    { props.iconSelector === 'projects' && <ProjectsIcon /> }
    { props.iconSelector === 'contact' && <ContactIcon /> }
    { props.iconSelector === 'message' && <MessageIcon />}
    { props.iconSelector === 'angular' && <AngularIcon /> }
    { props.iconSelector === 'saas' &&  <SaasIcon />}
    { props.iconSelector === 'typescript' && <TypeScriptIcon /> }
    { props.iconSelector === 'node' &&  <NodeIcon /> }
    { props.iconSelector === 'react' && <ReactIcon /> }
    { props.iconSelector === 'html' && <HtmlIcon /> }
    { props.iconSelector === 'css' && <CssIcon /> }
    { props.iconSelector === 'javascript' && <JavaScriptIcon /> }
    { props.iconSelector === 'hamburger' && <HamburgerIcon />}
    </>);
}