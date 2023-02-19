import { ReactElement } from "react";
import ProfileImage from '../../assets/images/profile.png';

interface HomeProps {
    isToApplyBlur: boolean
}

export const HomePage = (props: HomeProps): ReactElement => {
    return (
        <div id="home-page" className={props.isToApplyBlur ? 'page-blur' : ''}>
            <div className="top-container">
                <img src={ProfileImage} alt="profile" />
            </div>
            <div className="bottom-container">
                <h1>Gerald Wicks</h1>
                <h3>Web Developer</h3>
                <hr/>
                <p>As a web developer, I specialize in JavaScript applications, having experience with Angular, NgRx, RxJS, Cypress e2e tests, React, Redux, Router, Typescript, NodeJS, agile scrum, and clean code.</p>
                <a href="/projects">Show more</a>            
            </div>
        </div>
    );
}